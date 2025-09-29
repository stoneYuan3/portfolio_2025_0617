# The Sela Project

Created by: Stone Yuan
Category: Programming, Project
Status: Done

![teaser_sela.png](teaser_sela.png)

## Links

**App Link**

[https://sela-webapp.vercel.app/](https://sela-webapp.vercel.app/)

**Github**

[https://github.com/teamsela/sela-webapp](https://github.com/teamsela/sela-webapp)

**Team Website**

[https://www.biblepoetry.org/](https://www.biblepoetry.org/)

## Summary

- This is a volunteer web development project for a non-profit organization.
- This project is about developing a bible poetry reader that helps users to analysis bible poetry in the original Hebrew grammar structure.
- I serve as the front-end developer of the team starting at July 2023. The team has 2 front-end developer, 1 back-end developer, 1 project manager, and a bible expert who doesn't have a programming background.
- So far, I am in charge of developing the reader interface, including functionalities such as selecting poetry words, changing poetry word colour, and adjust font size.

## Takeaways:

- Gained a deeper understanding of React.js.
- Gained experience in using version control tools (Git) in a complex teamwork environment
- Gained hands-on experience with popular React.js frameworks such as Next.js

## Progress

The project starts in June 2023 when my friend William from a church in Coquitlam introduced this project to me during a fellowship meeting. William is quite an experienced programmer who has worked at EA for quite a while. He said he was working on a side project: a new bible reader app that focuses on analysing the Hebrew poetry part of the Bible, and asked if I am interested in joining. As I was trying to get more real-life programming experience, I accepted the invitation.

We initially tried to build our app based on STEP Bible, an established Bible reading tool that already has some features that fit our goal. We thought it would be easier if we could make an extension for the STEP Bible or build a new app based on STEP Bible’s framework if possible.

[http://stepbible.org/](http://stepbible.org/)

![image.png](image.png)

![image.png](image%201.png)

*Talking with William & Trying to establish STEP Bible dev environment on our machine, which was quite challenging*

We took some time to explore the STEP Bible source code and decided that it is too complicated to build on it. As other members of the team sourced a free Bible data source, we decided to build the app from scratch. I played a heavey role in building the early prototype in React.js and one of the core features of the app: drag and select the word blocks.

![image.png](image%202.png)

[https://docs.google.com/presentation/d/1xPu6H3s6j8uVAiWK7wGJgjWBN1d37E-fxthO9hiz4Ik/edit?slide=id.g28b1f9dd040_0_213#slide=id.g28b1f9dd040_0_213](https://docs.google.com/presentation/d/1xPu6H3s6j8uVAiWK7wGJgjWBN1d37E-fxthO9hiz4Ik/edit?slide=id.g28b1f9dd040_0_213#slide=id.g28b1f9dd040_0_213)

*Early design of the app designed by our team’s Bible expert*

![image.png](image%203.png)

[https://github.com/stoneYuan3/selaProrotype](https://github.com/stoneYuan3/selaProrotype)

*Early prototype for the app showing the basic nav tabs created by myself*

After playing around with prototypes, we built the first working prototype of the app with Create T3 App, a cli based on Next.js. I spent most of my time developing the drag-to-select feature and word block customlization feature since then, and I also fixed other minor bugs in the app when needed.

<img src="/images/articles/proj_sela/demo-color-0429.gif" />

*Developing drag-to-select feature & text colouring feature*

![image.png](image%204.png)

[Sela Mockup - 2025 - Google Slides](https://docs.google.com/presentation/d/1bczOMfYpuF_9l_HbBjXah5VlBWI6AklKX5EbS1kgdSY/edit?slide=id.g34d144f4cf9_1_14#slide=id.g34d144f4cf9_1_14)

*A recent feature request PPT from the team’s Bible expert & designer for the parallel display feature*

[https://www.notion.so/Sela-Project-Dev-Notes-2178ed4da86380dd82a5d57f8ee1a226](https://www.notion.so/Sela-Project-Dev-Notes-2178ed4da86380dd82a5d57f8ee1a226?pvs=21)

*Recent Dev Notes I made when developing the Parallel display feature*

[https://github.com/teamsela/sela-webapp/tree/main/src/components/StudyPane/Passage](https://github.com/teamsela/sela-webapp/tree/main/src/components/StudyPane/Passage)

[https://github.com/teamsela/sela-webapp/blob/main/src/hooks/useDragToSelect.tsx](https://github.com/teamsela/sela-webapp/blob/main/src/hooks/useDragToSelect.tsx)

*Relevant codes for the features I wrote*

<img src="/images/articles/proj_sela/sela_demo_2025_0926.gif" />

*Developing drag-to-select feature & text colouring feature. You can also try it at [https://sela-webapp.vercel.app/dashboard/home](https://sela-webapp.vercel.app/dashboard/home)*