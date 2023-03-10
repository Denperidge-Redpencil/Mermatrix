# Mermatrix


<span>
<img src="assets/mermatrix.png" align="left" style="width:100px;height: 100px; margin: 20px;">
<br>

Mermaid.js doesn't render automatically in Matrix. Lets fix that!
When a message contains a mermaid code block, this bot will return that very diagram.
</span>

&nbsp;&nbsp;&nbsp;

<img src="assets/screenshot.png" clear="left" alt="A screenshot of Mermatrix in action" />

&nbsp;

Functionality:
- On a new message containing a diagram definition, render the diagram(s).
- Render multiple diagrams from one message.
- When the original message gets edited in x amount of time, re-render.
- Choose per diagram whether to render into svg or png.

## Usage
Once started, invite the bot to channels you wish to use it in.
Afterwards, it will automatically detect and parse mermaid code blocks! Example

    ```mermaid
        graph TD
            A -->|Label| B
    ```

**Tip:** Add `.png`, `.svg`, `...` after `mermaid` in the code block to select the desired output format!

There are also some commands you can use when @mentioning the bot!

| command |                  function                   |
| ------- | ------------------------------------------- |
| avatar  | Change the avatar of the bot account.       |
| name    | Change the display name of the bot account. |

You don't have to call them with any parameters!
After calling one of these commands, the next message you send will be used as input.

## Installing
- Clone the repository.
- Either enter LOGINNAME & PASSWORD in .env, or generate an access token for your bot user (see [t2bot.io/docs/access_tokens/](https://t2bot.io/docs/access_tokens/)).
- Rename .env.example to .env and change the values.
- Run `npm install && npm build`.


|    npm run   |                   function                 |
| ------------ | ------------------------------------------ |
| start        | Run build/index.js                         |
| dev          | Run & watch app/index.ts                   |
| build        | Build app/ into build/                     |
| start-docker | Run the Dockerfile                         |
| dev-docker   | Build & run the Dockerfile                 |
| build-docker | Copy .env to .env.docker & build the image |

## Structure
- [app/](app/): Typescript code/src.
    - [@types/headless-mermaid](app/%40types/headless-mermaid/): type definition for the headless-mermaid api.
    - [index.ts](app/index.ts): runs the startClient from [client-setup](app/utils/client-setup.ts) and defines the commands to be run.
    - [mermaid.ts](app/mermaid.ts): defines the Mermaid functionality.
- [assets/](assets/): Images (and an image script) for use in the README.
- *build/*: Made during runtime. Compiled javascript code.
- *.env*: Manually made. Environment variables to use when running locally.
- *.env.docker* Manually made or generated from *.env*. Environment variables for use in Docker.


## Quirks
### Flowcharts don't render text unless specific settings are set
See the issue [here](https://github.com/mermaid-js/mermaid-cli/issues/112).


#### Why remove the old images instead of replacing them?
Oh don't think I didn't try (see the replace-diagrams branch)! It's either not possible in Matrix, or I goofed something.

## License
This project is licensed under the [MIT License](LICENSE).

