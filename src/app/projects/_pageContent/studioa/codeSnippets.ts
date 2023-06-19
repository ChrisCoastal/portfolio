export const code = {
  homeHtml: `<div class='cover flex-full-width'>
  {.section items}
    <div class='cover cover-image-container'>
      <a href={imageLeft.clickthroughUrl} class="cover-image-link cover-image-link--left">
        {.if imageLeft.customContent.buttonText}{imageLeft.customContent.buttonText}{.or}work work{.end}
      </a>
      <img class='cover cover-image cover-image--left' src="{imageLeft.assetUrl}" alt="{imageLeft.title}"/>
    </div>
    <div class='cover cover-image-container'>
      <a href={imageRight.clickthroughUrl} class="cover-image-link cover-image-link--right">
        {.if imageRight.customContent.buttonText}{imageRight.customContent.buttonText}{.or}studio work{.end}
      </a>
      <img class='cover cover-image cover-image--right' src="{imageRight.assetUrl}" alt="{imageRight.title}"/>
    </div>
  {.end}
  </div>`,
  homeCss: `.flex-full-width {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.flex-full-width > div {
  flex: 1;
}

.cover-image-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.cover-image {
  width: 102%;
  height: 102%;
  vertical-align: middle;
  transition: all 1s ease-in-out;
  object-fit: cover;
}

.cover-image--left:hover,
.cover-image--right:hover,
.cover-image-link:hover ~ .cover-image {
  transform: scale(1.01);
}

.cover-image-link {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  color: white !important;
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  white-space: nowrap;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.cover-image-link:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .flex-full-width {
    flex-direction: column;
  }
}`,
};
