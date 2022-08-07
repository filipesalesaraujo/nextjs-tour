import {useRouter} from "next/router";
import Link from "next/link";

export default function Slug() {
    const router = useRouter();
    return (
        <div>
            ID do post atual: {router.query.slug}
            <ul>
                <li>
                    <Link href='/'>
                        <a>Ir para a home</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}