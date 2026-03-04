Contributing Guide - NextBuy

Please follow these guidelines to keep the project clean, organized, and conflict-free.

This project is built using:

- React Native
- Expo 
- TypeScript
- Appwrite backend
 
Before You Start

- Set up project locally

Development Workflow

1. Pull latest code
# git checkout develop
# git pull

2. Create your branch
# git checkout -b abc/your-abc-name

3. Code your abc

4. Test properly

5. Commit changes
# git add .
# git commit -m "abc:short and clear message"

6. Git branch
# git push origin abc/your-abc-name

7. Create Pull Request -> develop

Coding Standards 

General Rules
- Use TypeScript only
- Use functional components only
- Keep files small and reusable
- Write readble code
- Remove console.log before commit

Styling Rules
- Use NativeWind (className)
- Avoid inline styles
- Keep consistents spacing

Bad:
style={{ marginTop: 10 }}

Good:
className= "mt-3"

Folder Rules 

components/
-> reusable UI only

screens/
-> screen-level logic

services/ 
-> API/Appwrite calls only

utils/
-> helper functions only

Do NOT mix responsibilities.

Commit Message Format
Use clean and meaning commits.

Format:
feat: add product search
fix: cart total calculation bug
style: improve UI spacing
refractor: clean auth service
docs: update README

Avoid: 
- update code
- fixed stuff

Pull Request Rules
Before creating PR:

- App runs successfully 
- No errors or warning
- No console.log
- Code formatted
- Tested on real device

PR should include:

- what you changed
- why you changed 
- screenshots (if UI)

Code Review 

All PRs must be reviewed by at least 1 teammate.

Reviewer checks: 
- Code wuality
- Folder placement 
- No duplicate code 
- No unnecessary libraries

Do not merge your PR without review.

Adding Dependencies 

Before installing new packages:
- discuss with team
- check if already available
- avoid heavy/unnecessary libraries

Example:

npm install some-library

Only if approved

Reporting Bugs 
Create an issue with:

- Steps to reproduce 
- Expected behavior
- Screenshot
- Device info

Good Practices 

- Pull develop daily
- Keep PRs small
- Write reusable components
- Test before push
- Communicate with team

Things to Avoid

- Pushing directly to main
- Huge commits 
- Copy-paste code
- Breaking folder structure 
- Ignoring lint errors 

Need Help?

If stuck:

- Ask in team group
- Check README.md 
- Check existing code patterns

Thank you for keeping the project clean and professional...