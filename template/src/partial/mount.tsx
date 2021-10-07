import { render, unmountComponentAtNode } from 'react-dom';

export const getRoot = () => {
  return document.getElementById('root') as unknown as HTMLDivElement;
};

export const mount = () => {
  return new Promise<void>((resolve) => {
    render(
      <div />,
      getRoot(),
      resolve
    );
  });
};

export const unmount = () => {
  return new Promise<void>((resolve, reject) => {
    unmountComponentAtNode(getRoot()) ? resolve() : reject();
  });
};
