import {
  Avatar as BaseAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

interface Props {
  data: {
    image: {
      src: string
    }
    title: string
  }[]
}

export function Avatar({ data }: Props) {
  return (
    <div className="grid w-full grid-cols-4 gap-8">
      {data.map((skill) => {
        return (
          <div>
            <BaseAvatar className="col-span-1 bg-secondary">
              <AvatarImage src={skill.image.src} alt={`Logo ${skill.title}`} />
              <AvatarFallback>{skill.title.slice(0, 2)}</AvatarFallback>
            </BaseAvatar>
          </div>
        )
      })}
    </div>
  )
}
