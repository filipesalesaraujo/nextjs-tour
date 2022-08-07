import Link from "next/link";

export default function SobrePage() {
    return (
        <div>
            Você está na página sobre
            <ul>
                <li>
                    <Link href='/'>
                        <a>Ir para a home</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}