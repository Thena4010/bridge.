import { IAppMenu } from '../create'
import { ipcRenderer } from 'electron'

export const DevMenu: IAppMenu = {
	displayName: 'Development',
	displayIcon: 'mdi-console-line',
	elements: [
		{
			displayName: 'Reload Browser Window',
			displayIcon: 'mdi-reload',
			keyBinding: {
				key: 'r',
				ctrlKey: true,
			},
			onClick: () => {
				ipcRenderer.send('bridge:reloadWindow')
			},
		},
		{
			displayName: 'Developer Tools',
			displayIcon: 'mdi-console',
			keyBinding: {
				key: 'i',
				shiftKey: true,
				ctrlKey: true,
			},
			onClick: () => {
				ipcRenderer.send('toggleDevTools')
			},
		},
	],
}
