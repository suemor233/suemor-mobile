import { Get } from '../server'
import type { AllArchiveType } from '../types/archive'

function getArchives() {
  return Get<AllArchiveType>(`/archive`)
}

export const ApiArchive = {
  getArchives,
}
