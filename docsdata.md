Getting started : Overview
Welcome to Dyad. Here's how to make the most of it.

Dyad is a free, local open-source AI app builder. It's an alternative to v0, Lovable or Bolt.new, but it runs on your computer, meaning there’s no lock-in.

What should I read?
If you're a first time user, start with the quickstart guide.

If you're looking to get the most out of Dyad, check out the guides—especially the chatting guide.

Quick start : Quickstart
Learn how to set up Dyad and start building your first app.

Watch this 3-minute video to get started with Dyad:


Prefer reading instead? Follow the steps below.

Installing
If you haven't already, download Dyad and then open the app.

If you are on Windows, you will see a big blue warning from Microsoft. Click "More info," then click "Run anyway."

Not sure if Dyad is safe? Dyad is open-source, so anyone can inspect the source code that's being run.

Setup
You'll need to complete two steps before you can start using Dyad.

When you open Dyad, you'll see a banner on the home screen indicating which steps (if any) still need to be completed.

Install node.js
You’ll need to install Node.js, which is the JavaScript runtime used to run your apps.

If you have trouble with this step, please go to the node.js help page.

Setup AI access
You’ll typically want to access AI models via APIs like Google’s Gemini, Anthropic’s Claude, or OpenAI’s.

To get started, I recommend creating a Google Gemini API key, which offers a generous free tier (e.g., 250 messages/day for Gemini 2.5 Flash).

Creating your first app
Now that you've finished the setup steps, type something into the chat input, then click the send button or press Enter. If you're not sure what to build, you can try one of the suggestions below the chat input.

Once you submit the chat input, Dyad will start building an app for you. After the AI finishes generating the code, you'll need to approve it. Once you approve the code, it will be saved and run on your computer. You should then see a preview of the app open on the right side.

Publich your first app : Publishing your App
Step-by-step guide for deploying your app with GitHub and Vercel.

So, you've built something awesome and now you want to share it with other people (or the whole world).

You can deploy your Dyad app anywhere, including your favorite cloud provider. But if you're not sure where to start, I will show you a simple and free way of deploying using GitHub and Vercel.

Host your code on GitHub
GitHub is the most popular code hosting platform. You can use it for collaborating on open-source projects like Dyad, but you can also use it to host private projects.

Because GitHub is so popular, most Cloud providers have a solid GitHub integration, which means that whenever you push code to your GitHub project, your Cloud provider can re-deploy your application.

Create a GitHub account
Create a GitHub account if you don't have one already.

Create a GitHub project
Create a GitHub project. If you don't want other people to see your source code, then pick private. If you're not sure which is the right option, then pick private and you can always make it public later.

Connect your Dyad app to GitHub
From the Dyad home page, open the app details card by clicking on the app from the left sidenav (open it by clicking on the menu button in the top-left) and then click Connect to GitHub. Follow the steps in the app to authorize Dyad to connect to GitHub. Don't worry, only you will be able to push things to your GitHub projects.

Sync to GitHub
After you've connected your Dyad app to your GitHub project, you can click Sync to GitHub which will push the code from your local computer to GitHub.

You can press this anytime to push new changes to GitHub. For example, after you've made changes to your Dyad app locally, you can do Sync to GitHub again which will typically trigger a new build with Vercel, or whichever Cloud provider you're using.

For more advanced GitHub workflows, read our GitHub integration guide

Deploying with Vercel
Vercel is a popular Cloud provider, particularly for JavaScript apps like the ones that you build with Dyad. Vercel is an excellent option to start out with because the setup is very easy and it has a good free plan.

Sign in to Vercel with GitHub
Go to https://vercel.com/new and click Continue with GitHub using your GitHub account. This will make it easy to connect your GitHub project to Vercel.

Import and deploy your GitHub project
After you sign-in with GitHub on Vercel's site, you will see a section called Import Git Repository, which should show a list of your GitHub projects. Click on the Import button for the GitHub project for your app (or search for it, if you don't see it).

Vercel will automatically detect which framework (e.g. Vite) you're using so in most cases you can just click Deploy. If you have some kind of API integration (e.g. Supabase, OpenAI), you may need to put in your environmental variables. If you forget, it's OK, you can always add it in later.

Check your deployment in the preview panel  by clicking the Get Deployments Button.
After Vercel builds and deploys your application, you should see a URL like dyad-app-name.vercel.app. Go to the URL and make sure the app is working as expected. You can now share your app with anyone on this URL!

Keep in mind, your app is now visible to the whole world, so avoid having any sensitive content without the proper auth and security protections.

If you want to push new changes, just click on the Sync to GitHub button for your Dyad app within Dyad and your new code will be pushed to GitHub and be picked up by Vercel.

Note  from Dyad app you can use the action button to trigger a new build with Vercel without leaving dyad app.


Model : AI Models

By default Trio Agent ships with its own free Agentic model Trio AI with a large 2 million  context window
Setting up AI models and picking the right ones

Dyad lets you choose your favorite AI model from the top AI providers.

Auto
You might have noticed that the default model is simply called auto. This means Dyad will pick the most suitable or available model depending on which AI providers you've set up. If you're just getting started, it's a good choice—but you can always switch to a specific model.

AI Providers
Google Gemini
Dyad recommends using Google Gemini because it has a generous free tier when you create an API key. But there are plenty of other options if you want something else.

Keep in mind with the free tier, Google reserves the right to use your data for training.

OpenRouter
OpenRouter is an AI provider aggregator which means that with a single API key you can access (almost) any AI model publicly available. OpenRouter also provides free access to models like DeepSeek v3.

Because OpenRouter aggregates many AI providers, you’ll need to check the data handling policy for each specific model (e.g., can they use your data for training?). Typically, free model access comes with the condition that providers may use your data for training.

Anthropic
Anthropic is known for developing strong models for coding. However, their models are relatively pricey, and their API doesn't offer a free tier.

OpenAI
OpenAI provides a wide range of models that are typically more affordable than Anthropic's model while delivering comparable performance. Some OpenAI models like GPT 4.1 mini has a generous free tier, but most of them cost money.

Local models
You can also use local models running on your computer. Please see the Local Models guide.

Picking the right model
A common question is: "Which model should I use?" If you're not sure, I recommend sticking with Auto and then switching to different models if you get stuck (e.g. a bad result with the auto model). No one model is the best for all coding tasks so there's value in trying multiple models.



If you're looking for the best AI models for creating web apps, check out the WebDev Arena Leaderboard which is a crowd-sourced leaderboard where users generate web apps with two models side-by-side (blindfolded).

Custom Models
Add any AI provider or model that you want

Dyad lets you use any AI model or provider, as long as they offer an OpenAI-compatible API.

Add a provider
Go to Settings, find the AI Providers section, and click Add Custom Provider. This will open a dialog where you can fill in the required information:

ID: This is used internally and cannot be changed later. You can choose any value.
Display Name: This is what will appear in the Dyad UI.
You can usually find the API Base URL in the provider’s documentation.

Add a model
In the AI Providers section of Settings, click on the provider you want to add a model for. On the provider’s page, scroll to the bottom and click Add Custom Model.

Fill in the following:

Model ID: This must match exactly what's specified in the provider’s API documentation. It’s the identifier sent to the API.
Name: A user-friendly label shown in the Dyad UI.
Description: Optional information displayed in a tooltip—e.g., noting if the model is free.
Max Output Tokens and Context Window: Set these based on the provider’s documentation. If left blank, Dyad will use default values, which may be smaller than optimal.

Local models
Use local LLMs

Overview
You can use Dyad with local LLMs through LM Studio (free for personal use) or Ollama, a free and open-source tool that makes it easy to run open-source language models directly on your device.

Running local LLMs can be resource-intensive, especially with larger or more advanced models. Smaller models may have trouble following Dyad's instructions and could produce less useful responses.

How to Use
Once LM Studio or Ollama is running on your device, open the model picker in Dyad, select Local Models, and you'll see the available models.

Troubleshooting
LM Studio
If no models appear in the LM Studio local models list, ensure that LM Studio is running—specifically at http://localhost:1234. In addition, the models must be loaded.

Ollama
If no models appear in the Ollama local models list, ensure that Ollama is running—specifically at http://localhost:11434, which is the default address.

Chatting
Tips on chatting with AI

Chatting with AI (aka "prompting") is more of an art than a science, but here are a few tips to help you get more out of chatting with AI in Dyad.

Use multiple chats
Unlike most other AI app builders, Dyad allows you to create multiple chats (conversations) for the same app which gives you better control over the context.

From a current chat for an app, you can create a new chat, which will create a clean context for the same app. This is helpful, for example, if your previous chat with the AI went off the rails or started going in circles.

Because all chats for a specific app are working on the same codebase, then the versions are shared.

Detailed first prompts
Be as specific as you can, particularly with the first prompt in building an app. This will help the AI understand what you're looking for rather than guessing.

Bad prompt: (too vague)

Build an AI food scanner app.

Good prompt: (specific user flows)

Build an AI food scanner app. It should have a welcome screen which is a carousel with a few different sections, each section should contain an image and a text explaining the benefit of the app. In the main screen, the user can upload an image which is sent to an AI which will predict what food it is and the number of calories and the user can confirm.

Writing a good prompt takes effort, but it'll save you a lot of trouble because you'll get what you want.

Review the change
Even if you're not familiar with the code Dyad is generating, it should summarize the changes it's making to each file, as well as the overall update.

Make sure these changes match your expectations. Sometimes Dyad may do too much—making changes you didn't request at all. If you're asking for a small tweak and it starts modifying several files, something likely went wrong and you should undo the change.

Other times, Dyad might do too little—describing the changes it intends to make without actually implementing them. For instance, if no code is generated, you may need to give it a nudge by saying something like, "Keep going."

What's next
I highly recommend reading the Debugging guide to get tips on debugging with AI
Debugging
Tips on debugging errors with AI

Debugging with AI to fix errors is one of the most important skills in using Dyad — or any other AI coding tool — effectively.

If you haven't yet, I recommend reading the Chatting guide for tips on chatting with AI effectively.

Prompting Tips
Describe the issue clearly
Imagine you're talking to a human co-worker. If you said there's a bug, you'd try to provide as many details as possible so they know what you're referring to. The same principle applies when you're working with AI.

Bad prompt: (unclear what to fix)

fix broken app

Good prompt: (clear about what the issue is)

After I click the sign-up button, the page is blank.

The problem with the bad prompt is that it's so vague that:

Dyad needs to guess which button you want fixed
Dyad needs to guess what the issue is
Sometimes, even with an under-specified prompt, it will work — but often, it doesn’t.

Include detailed error messages
Similar to the tip above, include error messages with as much detail as possible.

If you see an error in the UI, copy and paste the error message and ask the AI to fix it. For many errors, you'll see a Fix with AI button, but in some cases, you'll need to manually copy and paste them.

What to do when there are no error messages
What if the app is broken but you don't see any error messages? You can still ask the AI:

I don't see anything after I log in.

Sometimes this alone will fix the issue.

You can also ask the AI to add error handling and display error messages in the UI.

Example
Let’s say you’re getting a vague error after clicking the Sign-in button. You can ask Dyad:

Add error handling when signing in and show detailed error messages in a toast.

Then, you can use the specific error message and have Dyad fix it.

Workflow Tips
Test often & use undo
One challenge with AI is that it can make unexpected changes, so I recommend regularly testing your app's main flows in the preview panel to make sure nothing is broken (e.g., every few prompts). If something is off, use the undo feature, explained in the versioning guide.

Try another model
Often, trying the same prompt with a different model — especially a more powerful one like Gemini Pro 2.5 or Claude Sonnet 4 — can get you much better results.

First, undo, then click the Retry button.

Manage your context
With Dyad, you can create multiple chats for the same app. If you run into an error saying you've hit your context window limit, start a new chat.

When you're getting close to the limit, Dyad will suggest Summarize into new chat above the chat input. Click that to start a new chat based on a summary of the current one — it’s a great way to clean up your context without starting from scratch.

Previewing
Tips on viewing your app

Dyad allows you to preview your app right next to your AI chat, so you can test things as you go.

How to use it
UI	Feature	Description
Restart
Restart	Restarts the Node.js server. It takes longer than a refresh but helps when the app is in a weird state.
Refresh	Reloads the page (like a browser refresh). Dyad auto-reloads after edits, but a manual refresh can sometimes fix loading issues.
Address bar	You can change which page is shown the preview
Open new window	Opens the app in a new browser window.
Troubleshooting
Why isn't my app preview working?
If your app preview is taking a long time to load, check the System Messages (the drawer at the bottom of the preview side panel) for any relevant information. The first time you preview an app, Dyad installs npm packages, which can take a while depending on your internet speed and project.
Versioning
Automatic versioning so you don't lose progress

Dyad automatically creates a new version every time it edits your code. This means you never have to worry about losing your progress if (and when) the AI makes a mistake.

How to undo
At the top of the chat panel, you'll see a button that looks like this:

Version #
The # is whatever version your app is currently on. Clicking this button will open the version list. You can click on previous versions and the preview will update (it may take a second or so), which is useful for figuring out the last good version.

Once you've selected a version from the list, you can click the undo button to revert your code to that state.

Even if you undo, you won't lose any history. Dyad's versioning system is always additive, meaning it's safe to undo at any time.

How it works
If you're not a developer and aren't familiar with Git, don't worry—you don't need to understand this section to benefit from Dyad's automatic versioning!

If you are a developer, this section may be helpful if you're using Dyad alongside other tools (e.g. VS Code, etc.).

Every version in Dyad is essentially a git commit. The commit message is generated by the AI to summarize the changes.

When you do an undo in Dyad, it creates a new commit similar to a git revert except it can revert multiple commits at once.
Importing app
If you have an existing app that you want to bring into Dyad

Importing apps is experimental as of v0.6.0. Please report bugs.

If you’ve built your app using tools like Lovable, V0, Bolt, or anything else, you can now bring it into Dyad.

AI Rules
Dyad relies on a file called AI_RULES.md in the root of your project. This file contains AI rules — instructions that guide Dyad as it edits your app. It should describe your app’s tech stack and architecture so Dyad can make informed, meaningful changes.

If your project doesn’t already have an AI_RULES.md file, Dyad will automatically generate one when you import the app.

Limitations
Since app importing is still experimental, there are a few important limitations to keep in mind:

JavaScript apps only
Dyad currently only supports Node.js-based JavaScript apps. You can’t import apps built with non-JavaScript frameworks like Laravel (PHP) or Ruby on Rails.

npm run dev required
Dyad runs npm run dev by default to start the local development server. If your app doesn't include a dev script, you’ll need to add one in package.json.

Most modern JavaScript frameworks (e.g. Vite, Next.js) already follow this convention, so it shouldn’t be an issue in most cases.
Mobile App
Turn your Dyad web app into a hybrid mobile app using Capacitor

Dyad has experimental support for mobile apps. Please report bugs.

If you've built your app in Dyad using the default React/Vite.js template, you can upgrade it into a hybrid mobile app that runs both on the web and as a native iOS or Android app.

Should you build a mobile app?
While web apps are powerful and easy to deploy, there are cases where distributing your app as a native mobile app makes sense due to the advantages they offer.

Benefits
Deeper device integration. Native apps can access device features more comprehensively than web apps.
Push notifications. Send notifications to users even when the app isn't open.
Offline access. Native apps can provide full functionality without a network connection.
Drawbacks
Despite their advantages, native mobile apps are more complex to build and maintain.

More complex tooling. While Dyad supports mobile development, you'll need external tools like Android Studio or Xcode for building and testing.
Cost to publish. Publishing a web app is quick and free (see our publishing guide). In contrast, publishing a mobile app requires paid developer accounts (Apple and Google), and review processes can take time.
Hardware requirements. Building an iOS app requires a Mac or a remote build service (which typically costs money). You'll also want to test on real devices to catch platform-specific issues.
Recommendation
If you're unsure, we recommend starting with a web app using the default React template. You can always upgrade later to a hybrid mobile app.

If you want a UI that works well on both mobile and desktop devices, you can definitely do this with a web app. Simply chat with Dyad and ask it to make your UI responsive and mobile-friendly.

How to
If you're using the default React/Vite.js template, you can upgrade your app into a hybrid mobile app with Capacitor, a popular open-source framework for cross-platform development.

Upgrade your app
Go to the App Details page by clicking your app name in the top-left corner.

At the bottom of that page, find the Upgrades section. Look for Upgrade to hybrid mobile app with Capacitor and click Upgrade.

If the upgrade doesn't work, you can manually add Capacitor to your app.

Install IDEs
For Android apps, install Android Studio.
For iOS apps, install Xcode (Xcode runs only on macOS).
Open your mobile app in the IDE
On the App Details page, you’ll now see two new buttons: Sync and open in Xcode and Sync and open in Android Studio. Click the one that matches your platform (after installing the respective IDE).

For iOS, follow Capacitor’s Xcode guide.
For Android, follow Capacitor’s Android Studio guide.
Troubleshooting
As you build your mobile app, refer to Capacitor’s documentation. If you run into issues while using Xcode or Android Studio, see their respective troubleshooting pages for Android and iOS.
Pro overview
Learn about Dyad Pro and how it can accelerate your app development

Dyad Pro is a subscription service that gives Dyad users several perks on top of the core free Dyad product:

AI credits - Every month you'll receive 300 AI credits which give you access to all the leading AI models.
Pro modes - Pro modes are designed to maximize your AI credits and let you build faster and more efficiently.
Office hours - You'll get direct access to the creator of Dyad during office hours.
Learning content - Access exclusive learning content via Dyad Academy to level up your AI coding skills.
You can subscribe to Dyad Pro on the pricing page.
Templates Overview
Dyad gives you different options for starting points

Dyad comes with a couple of built-in templates.

React (Default)
The default template in Dyad is a minimal React/Vite.js app. It's a client-side app so if you want backend functionality you will need to use Supabase server functions.

For basic apps, the default React template is an excellent choice.

If you anticipate having a lot of backend functionality (e.g. calling APIs which require secret API keys), then using Next.js may be a better option.

Next.js
The Next.js template is a minimal Next.js app set up with Shadcn and Tailwind. Next.js is a more complex framework and has a steeper learning curve than client-side only React, but it provides seamless frontend and backend integration and good performance.

Angular  js
 The angular js template is a minimal angular js app set up with Shadcn and Tailwind. Angular js is a more complex framework and has a steeper learning curve than client-side only React, but it provides seamless frontend and backend integration and good performance.
 GitHub
Learn how to sync your code to GitHub

Dyad has built-in integration with GitHub, making it easy to push your local changes to a GitHub project.

For step-by-step instructions, see the Publishing your App guide.

Git tools
For most use cases, you don't need to use other Git tools—Dyad handles the core workflow. But for advanced workflows, you may want to use one of the tools below.

GitHub Desktop
GitHub Desktop is a great option for beginners, as it provides a user-friendly desktop interface for using Git.

Git CLI
The Git CLI is suited for power users who are comfortable with the command line and have more complex Git workflows.

Troubleshooting
Why do I get an error when I sync changes?
There's a few different reasons why syncing changes can fail. Please follow the instructions based on the error message that you get.

Push timed out

HTTP Error: 500 Internal Server Error

Push rejected because it was not a simple fast-forward. Use "force: true" to override
Reset Git history
If you want to reset your app's Git history, the simplest way to do this is to make a copy of the app without history.

You can do this by copying your app on the app details page. Go to the app details screen by clicking on the app name in the top-left corner and then click on the overflow menu in the top-right corner and then click Copy app. In the dialog, click Copy app without history. See the video in the link for reference.

Try pushing to GitHub with your copied app and it should succeed. At this point, you should develop on your copied app. You can keep the original app for reference.

I can't access all my GitHub repos
When you first connect Dyad to GitHub, you grant access to specific GitHub organizations. If you want to add access to more orgs later:

Go to the Settings page.
Under the Integrations section, click Disconnect from GitHub (red button).
Reconnect to GitHub and grant access to the desired organizations.
Use Supabase for auth, database and server functions.

What is Supabase
Supabase is an open-source backend platform that offers auth, a PostgreSQL database, edge functions, and more—all with a generous free tier. It's a great choice for quickly launching and scaling new projects.

Setup
Connecting to Supabase only takes a couple of minutes—and even faster if you're already familiar with it.

Connecting to Supabase
When you chat in Dyad and request a backend-related feature, Dyad will ask if you’d like to connect to Supabase. Click the button, and you’ll be taken to your app’s details page where you’ll see a Connect Supabase button that looks like this:

Supabase
Clicking Connect Supabase opens your browser and prompts you to review the permissions you want to grant Dyad. Choose the Supabase organization you’d like to connect.

Only you can access your Supabase resources through Dyad. Your access token is securely stored locally on your computer.

After submitting your selection on Supabase’s site, you’ll be redirected back to Dyad. The Dyad app should automatically reopen. If it doesn’t, click the button on the site to reopen it manually. Once that’s done, your Supabase connection is complete.

Selecting a Supabase Project
For each Dyad app you want to use with Supabase, you’ll need to choose a Supabase project. While you can reuse the same project across multiple apps, it’s usually simpler and safer to create a separate project for each one.

Using Supabase
Once setup is complete, you’re ready to use Supabase in your Dyad app! Just start chatting—Dyad will handle Auth, Database, and Server Functions using Supabase.

Auth
Supabase Auth is straightforward, especially with the default email/password method. You can ask Dyad to add authentication like this:

Add auth and make users login

By default, Supabase requires email confirmation when users sign up. You can disable this in your Supabase dashboard settings.

Database
Supabase Database lets you store and manage data. It also supports Row-Level Security (RLS), which allows secure, fine-grained access directly from the browser (e.g., your Dyad app) based on customizable policies.

Dyad usually generates reasonable default RLS policies, but you should review and adjust them to fit your specific needs.

Server Functions
Supabase Edge Functions—also referred to as Server Functions—run on Supabase's servers rather than in the browser. Think of them as remote functions you can easily call from your app.

They’re especially useful for tasks requiring private API keys (like calling the OpenAI API) because they keep sensitive keys out of the browser, avoiding common security issues.

Other Features
Supabase offers many features beyond those listed here. While Dyad’s integration hasn’t been tested with all of them, some may still work. If you encounter any issues, please let us know.

Troubleshooting
No publishable keys
If you get an error message like "No publishable key found for project", this usually means you are not connected to the right Supabase account and organization. Go to the Settings tab and click Disconnect Supabase and then re-connect to Supabase from one of your apps using Supabase. Make sure you sign in with the right Supabase account and select the right Supabase organization in the authorization dialog.
Building large apps
Tips for building large apps if you're hitting token limits

If you're working on large apps that are approaching your model’s token limits (e.g., 1 million for Gemini models), this guide will help you manage your app effectively.

Use a Long-Context Model
If you're not already using them, I recommend Google's Gemini models for large apps, as they support up to 1 million input tokens. While other models also offer large context windows, Gemini performs particularly well on long-context benchmarks.

Use Smart Context
Smart Context is a Dyad Pro feature that automatically selects the most relevant files from your codebase for the current conversation using a smaller model. This helps optimize your AI credit usage, as the flagship model doesn't need to process your entire codebase.

Smart Context also performs token compression by using a smaller model to pre-select files, allowing it to effectively handle well over 1 million tokens from your codebase.

However, keep in mind that Smart Context may struggle with broad queries (e.g., “make this app better”). In such cases, it falls back to using the flagship model on your entire codebase. If your codebase exceeds the model’s context window (e.g., >1 million tokens), this fallback will fail. In those cases, manual context management is your best option.
Select Component
Upgrade your app to support select component to edit

Select Component is a new feature in Dyad v0.8.0 that allows you to select a component and edit it.

Look for the icon above in the preview header bar. When you click it, you can select a component and have the AI edit that specific part of your app.

For Dyad apps created after v0.8.0, this feature is enabled by default and ready to use. For apps created before v0.8.0, you'll need to follow one of the upgrade paths below.

Quick upgrade
Dyad provides a one-click upgrade for older Dyad apps built with the default React/Vite.js template.

Go to the App Details page by clicking on your app name in the top-left corner.

At the bottom of the app details page, you will see an Upgrades section. Look for the upgrade named Enable select component to edit and click Upgrade.

If it suceeds, then you can start using the feature.

If you run into an error, follow the manual upgrade steps below.

Manual upgrade
To do a manual upgrade, you will want to open your Dyad app code directory in your terminal and IDE (e.g. VS Code, Cursor).

React.js / Vite
If you created a React.js / Vite app, which is Dyad's default template, you can manually upgrade by doing the following steps:

Install the @dyad-sh/react-vite-component-tagger npm package


pnpm add @dyad-sh/react-vite-component-tagger
# or
npm install @dyad-sh/react-vite-component-tagger
Add the plugin to vite.config.ts

Update your vite.config.ts file:


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dyadComponentTagger(), react()],
});
Commit the changes (optional)

You can commit these changes in Git or let Dyad commit them with your next edit.

Now, you should be able to use this feature.

Next.js
If you created a Next.js app, you can manually upgrade by doing the following steps:

Install the @dyad-sh/nextjs-webpack-component-tagger npm package


pnpm add @dyad-sh/nextjs-webpack-component-tagger
# or
npm install @dyad-sh/nextjs-webpack-component-tagger
Add the loader to your next.config.ts file


import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  webpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "@dyad-sh/nextjs-webpack-component-tagger",
      });
    }
    return config;
  },
};
 
export default nextConfig;
Commit the changes (optional)

You can commit these changes in Git or let Dyad commit them with your next edit.

Now, you should be able to use this feature.
Privacy Policy
Last updated May 8, 2025

Your data is yours — not ours — and its privacy is extremely important to us. We promise that we never sell your data—never have, and never will. Because Dyad is open-source, you can inspect our code to verify that we follow our stated policies.

TLDR
Dyad uses opt-in telemetry to help us improve the product.

You can turn telemetry on or off anytime from the Settings page by toggling the Telemetry switch.

What We Collect
Telemetry Data With your consent, we collect basic telemetry to help us understand how Dyad is used and to identify errors. This telemetry includes anonymized data such as feature usage, error reports, model selection, and randomly generated identifiers. This does not include your chat messages, prompts, or code.

Troubleshooting Logs If you use Upload Chat Session, we may collect your chat and select portions of your codebase for debugging purposes. This data is used only to help with support requests and is deleted after approximately one month.

How Your Data is Handled
Using the Free Version of Dyad (Desktop App) When using the free desktop version of Dyad, you provide your own API keys or connect to local models.

If you use API keys, your prompts and code are sent directly to the model providers (e.g., OpenAI).
If you use a local model, everything stays on your device. In both cases, your data never passes through Dyad's servers.
Using Dyad Pro (Paid Plan) Dyad Pro is a paid service that gives you access to hosted AI models via Dyad’s infrastructure. In this case, your prompts and code are proxied through Dyad servers before reaching the model providers. We minimize logging and only log content when necessary for abuse prevention. Your data is never used to train any model.

Full Privacy Policy
This policy applies to all products built and maintained by Dyad.

This policy applies to our handling of information about site visitors, prospective customers, and customers. We refer collectively to these categories of individuals as "you" throughout this policy.

However, this policy does not cover information about a customer’s end users that Dyad receives from a customer, or otherwise processes on a customer’s behalf, in connection with the services provided by Dyad to the customer pursuant to an applicable services agreement (including the content of messages of customer end users ("End User Communications")). Dyad processes End User Communications under the instructions of the relevant customer, which is the "data controller" or "business" (or occupies a similar role as defined in applicable privacy laws), as described in the applicable services agreement between such customer and Dyad. Dyad’s obligations as a "data processor" or "service provider" with respect to such information are defined in such services agreement and applicable data protection addendum and are not made part of this policy.

If you are a customer’s end user and you have questions about how your information is collected and processed through the services, please contact the organization who has provided your information to us for more information.

What we collect and why
Our guiding principle is to collect only what we need. Here’s what that means in practice:

Identity and access
When you sign up for a Dyad product, we may ask for identifying information such as your name, email address.

We’ll never sell your personal information to third parties, and we won’t use your name or company in marketing statements without your permission either.

Billing information
If you sign up for a paid Dyad product, you will be asked to provide your payment information and billing address. Credit card information is submitted directly to our payment processor and doesn’t hit Dyad servers.

Website interactions
We collect information about your browsing activity for analytics and statistical purposes such as conversion rate testing and experimenting with new product designs. This includes, for example, your browser and operating system versions, your IP address, which web pages you visited and how long they took to load, and which website referred you to us. If you have an account and are signed in, these web analytics data are tied to your IP address and user account until your account is no longer active.

Voluntary correspondence
When you email Dyad with a question or to ask for help, we keep that correspondence, including your email address, so that we have a history of past correspondence to reference if you reach out in the future.

When we access or disclose your information
No Dyad human looks at your content except for limited purposes with your express permission, for example, if an error occurs that stops an automated process from working and requires manual intervention to fix. These are rare cases, and when they happen, we look for root cause solutions as much as possible to avoid them recurring. We may also access your data if required in order to respond to legal process (see "When required under applicable law" below).

To help you troubleshoot or squash a software bug, with your permission. If at any point we need to access your content to help you with a support case, we will ask for your consent before proceeding.

To investigate, prevent, or take action regarding restricted uses. Accessing a customer’s account when investigating potential abuse is a measure of last resort. We want to protect the privacy and safety of both our customers and the people reporting issues to us, and we do our best to balance those responsibilities throughout the process. If we discover you are using our products for a restricted purpose, we will take action as necessary, including notifying appropriate authorities where warranted.

Aggregated and de-identified data. We may aggregate and/or de-identify information collected through the services. We may use de-identified or aggregated data for any purpose, including marketing or analytics.

When required under applicable law. Dyad is a U.S. company and all data infrastructure are located in the U.S.

Requests for user data. Our policy is to not respond to government requests for user data unless we are compelled by legal process or in limited circumstances in the event of an emergency request. However, if U.S. law enforcement authorities have the necessary warrant, criminal subpoena, or court order requiring us to disclose data, we must comply. Likewise, we will only respond to requests from government authorities outside the U.S. if compelled by the U.S. government through procedures outlined in a mutual legal assistance treaty or agreement. It is Dyad’ policy to notify affected users before we disclose data unless we are legally prohibited from doing so, and except in some emergency cases.

Preservation requests. Similarly, Dyad’s policy is to comply with requests to preserve data only if compelled by the U.S. Federal Stored Communications Act, 18 U.S.C. Section 2703(f), or by a properly served U.S. subpoena for civil matters. We do not disclose preserved data unless required by law or compelled by a court order that we choose not to appeal. Furthermore, unless we receive a proper warrant, court order, or subpoena before the required preservation period expires, we will destroy any preserved copies of customer data at the end of the preservation period.

If we are audited by a tax authority, we may be required to disclose billing-related information. If that happens, we will disclose only the minimum needed, such as billing addresses and tax exemption information.

Finally, if Dyad is acquired by or merges with another company — we don’t plan on that, but if it happens — we’ll notify you well before any of your personal information is transferred or becomes subject to a different privacy policy.

Your rights with respect to your information
At Dyad, we strive to apply the same data rights to all customers, regardless of their location. Some of these rights include:

Right to Know. You have the right to know what personal information is collected, used, shared or sold. We outline both the categories and specific bits of data we collect, as well as how they are used, in this privacy policy.
Right of Access. This includes your right to access the personal information we gather about you, and your right to obtain information about the sharing, storage, security and processing of that information.
Right to Correction. You have the right to request correction of your personal information.
Right to Erasure / “To Be Forgotten”. This is your right to request, subject to certain limitations under applicable law, that your personal information be erased from our possession and, by extension, from all of our service providers. Fulfillment of some data deletion requests may prevent you from using Dyad services because our applications may then no longer work. In such cases, a data deletion request may result in closing your account.
Right to Complain. You have the right to make a complaint regarding our handling of your personal information with the appropriate supervisory authority.
Right to Restrict Processing. This is your right to request restriction of how and why your personal information is used or processed, including opting out of sale of your personal information. (Again: we never have and never will sell your personal data.)
Right to Object. You have the right, in certain situations, to object to how or why your personal information is processed.
Right to Portability. You have the right to receive the personal information we have about you and the right to transmit it to another party.
Right to not Be Subject to Automated Decision-Making. You have the right to object to and prevent any decision that could have a legal or similarly significant effect on you from being made solely based on automated processes. This right is limited if the decision is necessary for performance of any contract between you and us, is allowed by applicable law, or is based on your explicit consent.
Right to Non-Discrimination. We do not and will not charge you a different amount to use our products, offer you different discounts, or give you a lower level of customer service because you have exercised your data privacy rights. However, the exercise of certain rights may, by virtue of your exercising those rights, prevent you from using our Services.
Many of these rights can be exercised by signing in and updating your account information. Please note that certain information may be exempt from such requests under applicable law. For example, we need to retain certain information in order to provide our services to you.

In some cases, we also need to take reasonable steps to verify your identity before responding to a request, which may include, at a minimum, depending on the sensitivity of the information you are requesting and the type of request you are making, verifying your name and email address. If we are unable to verify you, we may be unable to respond to your requests. If you have questions about exercising these rights or need assistance, please contact us at hi@dyad.sh. If an authorized agent is corresponding on your behalf, we will need written consent with a signature from the account holder before proceeding.

Depending on applicable law, you may have the right to appeal our decision to deny your request, if applicable. We will provide information about how to exercise that right in our response denying the request. You also have the right to lodge a complaint with a supervisory authority. If you are in the EU or UK, you can contact your data protection authority to file a complaint or learn more about local privacy laws.

Data retention
We keep your information for the time necessary for the purposes for which it is processed. The length of time for which we retain information depends on the purposes for which we collected and use it and your choices, after which time we may delete and/or aggregate it. We may also retain and use this information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. Through this policy, we have provided specific retention periods for certain types of information.

Location of site and data
Our products and other web properties are operated in the United States. If you are located in the European Union, UK, or elsewhere outside of the United States, please be aware that any information you provide to us will be transferred to and stored in the United States. By using our websites or Services and/or providing us with your personal information, you consent to this transfer.

Changes and questions
We may update this policy as needed to comply with relevant regulations and reflect any new practices. Whenever we make a significant change to our policies, we will refresh the date at the top of this page and take any other appropriate steps to notify users.

Have any questions, comments, or concerns about this privacy policy, your data, or your rights with respect to your information? Please get in touch by emailing us at hi@dyad.sh and we’ll be happy to try to answer them!

Adapted from Basecamp open-source policies / CC BY 4.0
