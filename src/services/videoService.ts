import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://gooubqmssqikddgevorg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvb3VicW1zc3Fpa2RkZ2V2b3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0MTUzMDMsImV4cCI6MTk4Mzk5MTMwM30.S-mW3D2wCmqbRh0EzIVvHD45ak5L8fuQQf3ghUTebcs"
const supabase = createClient(supabaseUrl, supabaseKey)

export interface VideoProps {
  title: string,
  url: string,
  thumb: string,
  type: string
}

export function videoService() {
  return {
    createVideo(data: VideoProps) {
      return supabase.from("video").insert(data)
    },
    getAllVideos() {
      return supabase.from("video").select("*")
    }
  }
}