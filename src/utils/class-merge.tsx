import {clsx} from 'clsx';
import {twMerge, ClassNameValue} from 'tailwind-merge';

export function ClassMerge(...inputs: ClassNameValue[]) {
  return twMerge(clsx(inputs))
}
