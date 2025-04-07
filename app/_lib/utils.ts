import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

const cn = (...cls: classnames.ArgumentArray) => twMerge(classnames(cls));

export default cn;
