Build me a web app following these instructions:
+ Folder: ./convertr.tools 
+ APP NAME: Convertr.Tools (domain convertr.tools)    
+ APP TOPIC: Web app (i.e., access via browser) that provides a large number of converting tools (see unfinished list below). Most importantly, the app needs to be fast, i.e., people should get to the converter they want with the least amount of clicks (or taps on mobile devices). The design also needs to work well on mobile devices.
   convertr.tools app (incomplete list):
	  + Markdown to HTML (and vice versa)
      + JSON Formatter
      + XML Formatter
      + inch/feet/yards/miles to mm/cm/m/km (and vice versa)
      + miles/km to nautic miles (and vice versa) 
      + text formatting (e.g., sentence case, title case, etc ) 
+ Technology: Next.JS (already installed in the above-mentioned folder)   
+ Standard pages and links: Add the following pages to the project, and link to them from the footer of the app. Open the pages in a new tab:   
  + About   
  + Privacy Policy (IMPORTANT: this page also needs to be accessible via a direct link, not just from within the app)  
  + Terms (i.e., Terms & Conditions)   
+ Other links in the footer: The URLs for these links will be defined in a config file (e.g., config.json), and the links are to be incorporated from that config file at runtime.  
  + Feedback   
  + Buy me a coffee   
  + Contact   
+ Add the build number below the 'About' link in the footer. Make sure the build number has its own CSS class independent of other classes. Use the build number from the package.json file.
+ Monetization: For starters the app will be free with advertisements (i.e., there needs to be space for ad placements). I’ll later most likely add paid plans for extended options.
+ Device usage: To start the app will be used as a responsive web app only. There is a chance that later versions will be released as native apps (iOS, Android, Mac, and Windows).  
+ Design: Simple and elegant. As few clicks as possible for users to get to what they are looking for. See attached screenshots. 
+ **SEO**: Prepare the app for SEO, i.e., keywords will be stored in an array in the config file. In the **planning phase**, give me feedback on what else can be done in this app for SEO.  
+ If using Mock data, clearly (!!!) mark them as mock data.
+ Implement extensive logging with lots of details in the form of a CSV file. Include date and time (local time zone), IP address, and other details relevant for someone who needs to identify issues of any kind (incl. debugging).  
+ At this point no database is needed, and it will most likely be added later. I.e., build everything (e.g., logging) in a way that the database use can be implemented easily later.   
+ Add a config file: make as many details as possible configurable by me (or other superadmins), e.g., API keys, API providers, API models, app name, user instructions, any prompts, etc. At a later time I'll add an admin page that is only accessible to admins (i.e., authentication required)  
+ CSS: Use Tailwind for absolute basics only, and use custom classes as much as possible (e.g., styling of padding, page background, etc.) Use as few CSS files as possible.
+ Make sure that the app is responsive, i.e., make it work well on mobile devices.   
+ Architecture: build in small code modules (files), e.g., API calls, logging, core logic, building the page, all in individual modules, each in their own file (unless you have a strong reason not to do that).
