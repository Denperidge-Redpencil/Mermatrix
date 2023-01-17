// index.ts
import { MatrixClient } from 'matrix-bot-sdk';
import { newClient, multiMessageCommandSetup, onMessage, changeAvatar, changeDisplayname } from 'matrix-bot-starter';

import { handleMermaidCodeblocks } from './mermaid';

async function onEvents(client : MatrixClient) {
    onMessage(client, 
        async (roomId : string, event : any, sender: string, content: any, body: any, requestEventId: string, isEdit: boolean, isHtml: boolean, mentioned: string) => {
        
        if (isHtml) {
            if (mentioned) {
                let command = mentioned.toLowerCase();

                multiMessageCommandSetup(client, roomId, event, 
                    (command.includes('picture') || command.includes('avatar')), 
                    true, 
                    {
                        description: 'avatar change',
                        messageType: 'm.image',
                        functionToExecute: changeAvatar
                    }, 
                    'Setting new avatar! If your next message is an image, I will update my avatar to that.');
                
                multiMessageCommandSetup(client, roomId, event,
                    (command.includes('name') || command.includes('handle')), 
                    true, 
                    {
                        description: 'display name change',
                        messageType: 'm.text',
                        functionToExecute: changeDisplayname
                    }, 
                    'Setting new display name! I\'ll set it to the contents of your next message.');
            }
        }

        handleMermaidCodeblocks(client, roomId, requestEventId, event, body, isEdit);

    });

}

newClient().then((client : MatrixClient) => {
    onEvents(client);
});