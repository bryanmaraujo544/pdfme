import type { UIRenderer, UIRender } from '@pdfme/common';
import { text, image } from '@pdfme/schemas';

const renderer: UIRenderer = { text: text.ui as UIRender, image: image.ui as UIRender };
export default renderer;
