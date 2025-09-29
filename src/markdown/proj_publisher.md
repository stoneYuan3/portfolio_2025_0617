# Portfolio Document

![image 35.png](image_35.png)

### Type:

Front-end development

### Skills & Tools:

AI Coding Tools (Claude Code, ChatGPT), React + Next.js, Typescript, Figma

### Context:

Hobby project

### Time:

August 2025

## Links

**Website Link**

[https://publisher-wizard.vercel.app/](https://publisher-wizard.vercel.app/)

**App Guide Graphics**

[https://www.figma.com/design/lhEEl7AHJYtGKqiNWbQeUJ/Publisher-Wizard-App?node-id=0-1&t=3vwXWlUNkFG8St8V-1](https://www.figma.com/design/lhEEl7AHJYtGKqiNWbQeUJ/Publisher-Wizard-App?node-id=0-1&t=3vwXWlUNkFG8St8V-1)

This is a Publishing helper app that makes it easy for anyone to print their own books at home using a regular printer and standard paper. It takes any PDF and rearranges the page order so users can print in convenient and paper saving sizes such as 1/2 letter or 1/4 letter while keeping the correct page order.

I am inspired to develop this app because I prefer to read physical book, and there are cases where I can only find the digital version of the book that I want to read. I find that the default print setting with regular letter paper is too large for a book and very paper costing, and I need to print two or even four pages per side to get a more ideal page size & paper cost. 

Realizing that printing mutiple pages per side will mess up the page order, I decided to develop this app to solve this issue.

![image.png](image.png)

*A 1/4 letter size mini book printed with the help of this app.*

It is also notable that I used Claude Code to generate most of the codes for this app. This is my first attempt to intergrate AI tools in my workflow and my role in this project is more like a product mananger figuring out which feature is needed the most for this kind of app.

### Story

I was inspired by the idea of printing and binding my own book back when I was studying in Simon Fraser University’s School of Interactive Arts and Technology program, where I had some Publishing program classes as electives. For the final project of a Publishing course, we are asked to design and print a booklet for an exhibition. I find that printing and binding a book is quite easy, and I was inspired by the idea of printing e-books by myself, for I have a preference for paper books.

![result1.jpg](result1.jpg)

*The booklet I designed & printed for the Publishing course project*

However, when I tried printing my own book, I realized that using regular letter-sized paper wasn’t very practical—it was too large and consumed a lot of paper. To save space, I experimented with printing 2 or 4 pages per sheet, but quickly discovered that this caused the page order to become incorrect once printed. That’s what led me to write a program that rearranges the page order so the book prints correctly.

As ChatGPT was becoming popular, I first wrote a simple Python app with the help of AI to explore what ChatGPT can offer & resolve my needs.

[https://github.com/stoneYuan3/pdfPageSorter](https://github.com/stoneYuan3/pdfPageSorter)

Since this small Python script already met my needs, I initially set the project aside. But recently, I watched a [YouTube video](https://www.youtube.com/watch?v=4CUqeauH3-4&list=PLxT_KdRnCxVJgKCw14Phnpqg_qoS4snrb&index=3) (in Mandarin) discussing AI trends. The video highlighted how AI coding tools like Cursor can automate programming tasks, accelerate development, and empower anyone to create impactful apps if they can identify real needs in people’s lives. Inspired by this, I decided to revisit my book-printing app idea as a way to experiment with this new development approach and get hands-on experience with AI-assisted programming.

As I restarted the development of my book printing app with AI tools, I find my role is more like a product manager instead of a programmer since AI can handle the programming task well as long as I make my instructions clear. Below are records of some of my prompt messages I sent to AI tools and my project plan:

[https://www.notion.so/AI-prompt-2508ed4da86380ebae8deb2ef09271fe?source=copy_link](https://www.notion.so/AI-prompt-2508ed4da86380ebae8deb2ef09271fe?pvs=21)

Through this project, I was introduced to AI-assisted development methods and gained insights into both the advantages and limitations of this approach. Specifically, I found that:

- For the scope of this project, AI is generally effective at implementing the features I request **as long as I know exactly what I want** and can describe it in detail. However, when prompts are less specific, the output tends to be unstable. This suggests that communication skills—such as the ability to clearly articulate requirements or program structures—may become just as important, if not more so, than traditional coding skills.
- It is still important to maintain one’s own skills, since AI often struggles with highly customized content. For example, I [created the graphics for the app guide](https://www.figma.com/design/lhEEl7AHJYtGKqiNWbQeUJ/Publisher-Wizard-App?node-id=0-1&t=3vwXWlUNkFG8St8V-1) myself, as relying on AI to generate similar assets would have been much more time-consuming. Likewise, AI can sometimes run into unexpected bugs, and having programming knowledge of your own can make troubleshooting and resolving such issues significantly faster.

As of today the app is still under development but the core feature is already completed. You can try the app at [https://publisher-wizard.vercel.app/](https://publisher-wizard.vercel.app/)