export const code = {
  modal: `const Modal: FC<ModalProps> = ({ options, children }) => {
    const modalRoot = document.getElementById('modal-root');
    
    const [show, setShow] = useState(false);
    
    function toggleModal() {
      setShow(!show);
    }
    
    return show && modalRoot
      ? createPortal(
          <div role="dialog">
            <FocusTrap options={options}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div>
                  <button
                    onClick={toggleModal}
                    X
                  </button>
                </div>
                <div className="flex flex-col items-center gap-4">{children}</div>
              </div>
            </FocusTrap>
          </div>,
          modalRoot
        )
      : null;
    };`,
  focustrap: `import { ComponentProps, FC, PropsWithChildren } from 'react';
  import { useEffect, useInsertionEffect, useRef } from 'react';
  import { focusable } from 'tabbable';
  
  /**
  * FocusTrap
  * This component functions as a container to hold focus with the intention of
  * improving keyboard navigation with certain UI (ie: a modal dialog).
  * When active, it limits focus to children of the component.
  * On unmount focus returns to the previously focused element outside of the FocusTrap.
  * @param {boolean} focusFromEnd - default set to false boolean to toggle focus from end
  * @param {boolean} trapFocus - default set to true boolean to toggle focus trapping; 
  * when trapFocus is set to false, the trap will only initiate the focus but not hold it
  */
  
  export interface FocusTrapProps extends PropsWithChildren<ComponentProps<'div'>> {
  trapFocus?: boolean;
  focusFromEnd?: boolean;
  }
  
  interface FocusableElement extends Element {
  focus?: (options?: { preventScroll?: boolean; focusVisible?: boolean }) => void;
  }
  
  export const FocusTrap: FC<FocusTrapProps> = ({
  trapFocus = true,
  focusFromEnd = false,
  children
  }) => {
  const returnFocusToRef = useRef<FocusableElement | null>(null);
  const trapContainerRef = useRef<HTMLDivElement | null>(null);
  const autoFocusedChildRef = useRef<FocusableElement | null>(null);
  const focusableElementsRef = useRef<FocusableElement[]>([]);
  const curFocusRef = useRef<FocusableElement | null>(null);
  const firstFocusableRef = useRef<FocusableElement | null>(null);
  const lastFocusableRef = useRef<FocusableElement | null>(null);
  
  const isFocusableElement = (element: Element | null): element is FocusableElement => {
    const canFocus = typeof (element as FocusableElement)?.focus === 'function';
    return canFocus;
  };
  
  const isAutoFocusedChild = (element: FocusableElement) => {
    // check if a focusable child element has autoFocus prop passed
    const REACT_ELEMENT_PROPS = '__reactProps$';
    const props = Object.keys(element).find((key) => key.startsWith(REACT_ELEMENT_PROPS));
    // @ts-expect-error props is a defined as key of element
    // autoFocus property is boolean on the element.props object
    const autoFocused = Boolean(props && element?.[props]?.autoFocus);
    return autoFocused;
  };
  
  // useInsertionEffect required to create a ref to the current focused element
  // before any DOM mutation that might change the focus prior to the trap activating
  // ie: if an autoFocus prop is passed to a child element within the FocusTrap
  useInsertionEffect(() => {
    // before moving focus into the trap save the currently focused element
    returnFocusToRef.current = isFocusableElement(document.activeElement)
      ? document.activeElement
      : null;
  
    return () => {
      // When the component unmounts, return focus to the previously focused element
      returnFocusToRef.current?.focus?.({ preventScroll: true });
    };
  }, [!!children]);
  
  useEffect(() => {
    // if children mutate while the trap is active, update the focusable elements
    const focusableElements = trapContainerRef.current
      ? focusable(trapContainerRef.current).filter((element) => isFocusableElement(element))
      : [];
  
    focusableElementsRef.current = focusableElements;
  
    const autoFocusedChild = focusableElements.find((element) => isAutoFocusedChild(element));
    autoFocusedChildRef.current = autoFocusedChild || null;
  
    firstFocusableRef.current = focusableElements[0];
    lastFocusableRef.current = focusableElements[focusableElements.length - 1];
  }, [children]);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // let the client handle the keydown event if focus is not being trapped
      // or if there are no focusable elements
      if (event.key !== 'Tab' || !trapFocus || !focusableElementsRef.current.length) return;
  
      // Get the currently focused element
      const focusedElement = document.activeElement;
      const focusInTrap = focusableElementsRef.current.includes(focusedElement as FocusableElement);
  
      const updateCurFocusRef = (shiftKey: boolean) => {
        if (focusedElement === null) return;
        const focusIndex = focusableElementsRef.current.indexOf(focusedElement);
        if (focusIndex === -1) return;
  
        if (shiftKey) {
          const prevEl = focusIndex > 0 ? focusIndex - 1 : focusableElementsRef.current.length - 1;
          if (focusInTrap) curFocusRef.current = focusableElementsRef.current[prevEl];
        }
        if (!shiftKey) {
          const nextEl = focusableElementsRef.current.length > focusIndex + 1 ? focusIndex + 1 : 0;
          if (focusInTrap) curFocusRef.current = focusableElementsRef.current[nextEl];
        }
      };
  
      // if the FocusTrap loses focus, move focus back to the last focused element
      if (!focusInTrap && curFocusRef.current) {
        event.preventDefault();
        curFocusRef.current?.focus?.();
      }
      // update a ref the element that is to be focussed
      // this will only be used if the trap loses focus (ie: click away)
      updateCurFocusRef(event.shiftKey);
  
      // if the focussed element is the first or last focussable element of the trap
      // then focus programmatically wraps to the other end
      // otherwise the client will handle the keydown event and focus change
      if (focusInTrap && event.shiftKey && focusedElement === firstFocusableRef.current) {
        // If shift is pressed and the first focusable element is focused, focus the last focusable element
        event.preventDefault();
        lastFocusableRef.current?.focus?.();
      }
      if (focusInTrap && !event.shiftKey && focusedElement === lastFocusableRef.current) {
        // If shift is not pressed and the last focusable element is focused, focus the first focusable element
        event.preventDefault();
        firstFocusableRef.current?.focus?.();
      }
    };
  
    const initFocusFrom = () => {
      const focusFrom = focusFromEnd ? lastFocusableRef.current : firstFocusableRef.current;
      // if autoFocus is passed to a child element, focus that element instead
      return autoFocusedChildRef.current || focusFrom;
    };
  
    // regardless trapFocus value, focus will always move into the trap
    const initFocusElement = initFocusFrom();
    initFocusElement?.focus?.({ preventScroll: true });
    curFocusRef.current = initFocusElement;
  
    !!children && document.addEventListener('keydown', handleKeyDown);
  
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [!!children, trapFocus, focusFromEnd]);
  
  return <div ref={trapContainerRef}>{children}</div>;
  };`,
};
