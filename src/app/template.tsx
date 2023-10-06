import { WithCounter } from "./WithCounter"

export default function Template({ children }: { children: React.ReactNode }) {
    return <WithCounter>
        <div>
          <div>inserted by template</div>
          {children}
        </div>
      </WithCounter>
  }