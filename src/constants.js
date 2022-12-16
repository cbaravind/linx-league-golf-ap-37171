import Pubnub from "pubnub"

export const API_URL = "https://linx-league-golf-ap-37171.botics.co"
export const CSRF_Token =
  "0SZF0SKGN2qB1WzJ15Bhl9zCfAZnvGr3nB6enUgIqpgHmdPPeH20io2EeAQRD41E"
export const IMAGE_PLACEHOLDER =
  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
export const publishKey = "pub-c-004f2c89-9136-4cf8-bcbf-fceb8b9ef2f0"
export const subscribekey = "sub-c-f9ce9ceb-c608-4bcd-a862-f59490a11a39"
export const imagePickerOptions = {
  mediaType: "photo",
  maxWidth: 500,
  maxHeight: 500,
  includeBase64: true
}
export const pubnub = new Pubnub({
  publishKey: publishKey,
  subscribeKey: subscribekey,
  userId: "User"
})
