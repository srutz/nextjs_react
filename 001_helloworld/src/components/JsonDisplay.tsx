
export function JsonDisplay(props: { json: any }) {
    return <pre className="text-xs">{JSON.stringify(props.json, null, 4)}</pre>
}