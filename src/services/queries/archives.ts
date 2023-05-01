import { useQuery } from '@tanstack/react-query'

import { ApiArchive } from '../api/archives'

export const useGetArchives = () => {
  return useQuery(['archive'], ApiArchive.getArchives)
}
