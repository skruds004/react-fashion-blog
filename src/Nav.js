export default function Nav({links}) {
    return (
        <ul aria-label="Main Navigation" role="navigation">
            {links.map((link) => {
                return (
                    <li>
                        <a>{link}</a>
                    </li>
                );

            })};
        </ul>
    );
}