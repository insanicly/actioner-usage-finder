import { reset } from './tasks/reset';
import { searchInNodes } from './tasks/search-in-nodes';

chrome.runtime.onMessage.addListener(async function (message) {
  if (message.type === 'start') {
    await searchInNodes({ searchedText: message.searchedText });
  } else if (message.type === 'reset') {
    await reset();
  }
  return true;
});
