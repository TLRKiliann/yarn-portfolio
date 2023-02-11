interface SecurityItemsProps {
  id: number | null
  security: string
}
interface SecurityProps extends Array<SecurityItemsProps>{}

export const hardskillssecurity: SecurityItemsProps[] = [
  {
    id: 1,
    security: "Attestation ANSSI (SecNum)"
  },
  {
    id: 2,
    security: "Kalilinux - HTB - Rootme"
  },
  {
    id: 3,
    security: "Les bonnes pratiques"
  }
]