# Jetour Home Page Demo Development

### Type:

Front-end development

### Skills:

HTML, CSS, Javascript

### Context:

Front-end development Internship project

### Time:

August 2023

Part of the Jetour website maintenance project mentioned in the resume. Asked to fix the Vue.js and React.js powered map page of the original Jetour website. The original map page had issues with search bars and broken layout consistency in mobile and different language versions.

Added a Vue.js powered search bar and fixed layout glitches in right-to-left language versions and mobile versions with the Swiper.js plugin.

## Gain:

Practised my Vue.js skill by putting the knowledge I learnt in my own time before this project. Had an increased understanding towards compatibility issues across different languages.

## Demo:

<iframe src="/demo/jeTourDemo/index.html" title="description"></iframe>

<img src="/images/projects/jetourDemo/jetourDemo_banner.gif" />

<img src="/images/projects/jetourDemo/jetourDemo_allpage.gif" />

## Process/Challenge:

The most challenging part of this project is the banner slider transition animation. Each banner slide is separated by three circles of different sizes and is expected to rotate at different speeds when sliding to the next slide. Although I was familiar with relevant skills such as Swiper Slider plugin and CSS animation at the time, I had never dealt with such complex animations before.

<img src="/images/projects/jetourDemo/144.gif" />

*Expected Outcome*

After carefully analysing the structure of the animation in the demo, I decided to tackle the problem by setting up three independent HTML elements for the banner. Each HTML element represents one circle and they are animated separately.

<img src="/images/projects/jetourDemo/jeTourDemo-process-1.png" />

Realizing that just rotating the image is not enough to achieve the desired result, I decided to apply two layers of animation. While the rotation animation is realized with CSS animation, the fade effect in the video demo is realized with Swiper’s crossfade feature instead. This ensures that the image will rotate and fade at the same time during the transition just as the original demo video showcased.

<img src="/images/projects/jetourDemo/jeTourDemo-process-2.png" />

*Left: CSS animation. Right: Swiper transition animation*

The base for the banner animation is done at this moment, however, a new issue arises where the image can’t seem to cover the entire banner area when rotating.

<img src="/images/projects/jetourDemo/197_raw.gif" />

*Screen record for a quick report to my co-worker demonstrating the issue*

To solve this issue, I attempted to scale up the images during the transition, hoping this would be enough to cover the entire banner area. However, it appears that scaling the image a little is not sufficient while scaling the image too much will break the animation. To tackle the issue, I requested the design team to make the images square and applied a small scale up to images during transitions to achieve the desired result.