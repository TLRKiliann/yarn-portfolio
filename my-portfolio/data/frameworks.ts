interface FrameworksItemsProps {
  id: number | null
  framework: string
}

interface FrameworksProps extends Array<FrameworksItemsProps>{}

export const frameworks: FrameworksItemsProps[] = [
  {
    id: 1,
    framework: "React"
  },
  {
    id: 2,
    framework: "Vite"
  },
  {
    id: 3,
    framework: "NextJS"
  },
  {
    id: 4,
    framework: "Angular (-)"
  }
]