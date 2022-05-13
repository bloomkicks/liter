import classes from './Memos.module.scss'

const Memos = (props: {id: string}) => {
    return (
        <section><h1>{props.id} Memos</h1></section>
    )
}

export default Memos