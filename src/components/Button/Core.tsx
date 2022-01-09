import Link from 'next/link';

interface ButtonCoreProps {
  className?: string;
  href?: string;
  isExternalLink?: boolean;
}

const ButtonCore: React.FC<ButtonCoreProps> = (props) => {
  if (props.href && props.isExternalLink) {
    // 外部リンク
    return (
      <a
        className={props.className}
        href={props.href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {props.children}
      </a>
    );
  } else if (props.href) {
    // 内部リンク
    return (
      <Link href={props.href}>
        <a className={props.className}>{props.children}</a>
      </Link>
    );
  } else {
    // リンクなし
    return <button className={props.className}>{props.children}</button>;
  }
};

export default ButtonCore;
