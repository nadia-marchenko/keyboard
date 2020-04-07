const enterArea = document.createElement('div');
enterArea.className = 'enter-area';
document.body.append(enterArea);

const textarea = document.createElement('textarea');
textarea.className = 'keyboard-enter';
textarea.setAttribute('cols', 87);
textarea.setAttribute('rows', 7);

enterArea.prepend(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';

enterArea.after(keyboard);

const keyboardItems = document.createElement('div');
keyboardItems.className = 'keyboard__items';

keyboard.prepend(keyboardItems);

// Creates HTML for an icon
const createIcon = (iconName) => `<i class="material-icons">${iconName}</i>`;

const keys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'keyboard_capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'keyboard_return',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?', 'shift',
  'fn', 'control', 'option', 'command', 'space_bar', 'command', 'option', 'keyboard_arrow_left', 'keyboard_arrow_up', 'keyboard_arrow_down', 'keyboard_arrow_right',
];

const br = document.createElement('br');

for (let i = 0; i < keys.length; i += 1) {
  const usualButton = document.createElement('button');
  const twoButtons = document.createElement('div');
  twoButtons.className = 'keyboard__item_arrows_wrapper';
  if (keys[i] === 'keyboard_arrow_up') {
    usualButton.setAttribute('type', 'button');
    usualButton.className = 'keyboard__item';
    keyboardItems.append(twoButtons);
    twoButtons.append(usualButton);
    twoButtons.setAttribute('id', 'two-buttons');
  } else if (keys[i] === 'keyboard_arrow_down') {
    usualButton.setAttribute('type', 'button');
    usualButton.className = 'keyboard__item';
    document.getElementById('two-buttons').append(usualButton);
  } else {
    usualButton.setAttribute('type', 'button');
    usualButton.className = 'keyboard__item';
    keyboardItems.append(usualButton);
  }

  switch (keys[i]) {
    case 'backspace':
      usualButton.classList.add('keyboard__item_wide');
      usualButton.innerHTML = createIcon(keys[i]);
      keyboardItems.append(br);
      usualButton.addEventListener('click', () => {
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
      });
      break;

    case 'tab':
      usualButton.classList.add('keyboard__item_wide', 'keyboard__item_small-letter');
      usualButton.innerHTML = keys[i];
      usualButton.addEventListener('click', () => {
        textarea.value += '\t';
      });
      break;

    case 'keyboard_capslock':
      usualButton.classList.add('keyboard__item_avg-wide');
      usualButton.innerHTML = createIcon(keys[i]);
      break;

    case 'keyboard_return':
      usualButton.classList.add('keyboard__item_avg-wide', 'keyboard__item_small-letter');
      usualButton.innerHTML = createIcon(keys[i]);
      keyboardItems.append(br);
      usualButton.addEventListener('click', () => {
        textarea.value += '\n';
      });
      break;

    case 'shift':
      usualButton.classList.add('keyboard__item_max-wide', 'keyboard__item_small-letter');
      usualButton.innerHTML = keys[i];
      break;

    case 'control':
    case 'option':
    case 'fn':
      usualButton.classList.add('keyboard__item_small-letter');
      usualButton.innerHTML = keys[i];
      break;

    case 'command':
      usualButton.classList.add('keyboard__item-2wide', 'keyboard__item_small-letter');
      usualButton.innerHTML = keys[i];
      break;

    case 'space_bar':
      usualButton.classList.add('keyboard__item_more-wide');
      usualButton.innerHTML = createIcon(keys[i]);
      usualButton.addEventListener('click', () => {
        textarea.value += ' ';
      });
      break;

    case 'keyboard_arrow_left':
      usualButton.innerHTML = createIcon(keys[i]);
      usualButton.addEventListener('click', () => {
        textarea.value += '◀';
      });
      break;

    case 'keyboard_arrow_right':
      usualButton.innerHTML = createIcon(keys[i]);
      usualButton.addEventListener('click', () => {
        textarea.value += '▶';
      });
      break;


    case 'keyboard_arrow_up':
      usualButton.classList.add('keyboard__item_arrows');
      usualButton.innerHTML = createIcon(keys[i]);
      usualButton.addEventListener('click', () => {
        textarea.value += '▲';
      });
      break;

    case 'keyboard_arrow_down':
      usualButton.classList.add('keyboard__item_arrows');
      usualButton.innerHTML = createIcon(keys[i]);
      usualButton.addEventListener('click', () => {
        textarea.value += '▼';
      });
      break;

    default:
      usualButton.innerHTML = keys[i];
      usualButton.addEventListener('click', () => {
        textarea.value += usualButton.innerHTML;
      });
      break;
  }
}
