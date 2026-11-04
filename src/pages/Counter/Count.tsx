import '../../App.css'

export default function Count(props: {count: number}) {
    return (
        <div className="count">
            <p>You clicked {props.count} times</p>
        </div>
    )
}
