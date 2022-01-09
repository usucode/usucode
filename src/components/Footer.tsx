import React from 'react';
import ButtonSNS from '~/components/Button/SNS';

const Footer = () => {
  return (
    <footer className="py-12 flex flex-col items-center">
      <ul className="flex justify-center space-x-4">
        <li>
          <ButtonSNS href="https://twitter.com/usucode" isExternalLink />
        </li>
        <li>
          <ButtonSNS href="https://note.com/usucode" isExternalLink />
        </li>
        <li>
          <ButtonSNS href="https://github.com/usucode" isExternalLink />
        </li>
      </ul>
      <p className="mt-8 text-center text-white text-sm">
        © 2022 yusuke akiyama
      </p>
    </footer>
  );
};

export default Footer;
