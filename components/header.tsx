import Link from 'next/link';

export default function Header() {
    return (
        <div className="header-container">
            <Link href="/">
                <a className="header-item">Home</a>
            </Link>
            <Link href="/about">
                <a className="header-item">About</a>
            </Link>
        </div>
    );
}
