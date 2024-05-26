
export function LoremIpsum({ repeat = 1 }: { repeat?: number }) {
    return (
        <div>
            {Array(repeat).fill(0).map((_, i) => (
                <p key={i}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            ))}
        </div>
    )
}