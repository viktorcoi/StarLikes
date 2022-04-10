import Link from 'next/link'

const LinkA = (props) => {
    return (
        <Link {...props}>
            <a onClick={props.onClick} target={props.target} rel={props.rel} className={props.className}>{props.children}</a>
        </Link>
    )
}

export default LinkA;