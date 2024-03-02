import {blockContentSchema} from './blockContent'
import {skillSchema} from './skill'
import {projectSchema} from './project'

export const schemaTypes = [...blockContentSchema, ...skillSchema, ...projectSchema]
