import { ISubscribeCallback } from '../api/types'
import { getBaseUrl } from '../api/utils'
import { IUndbSDKConfig } from '../config'

export class SubscriptionService {
  private eventSource?: EventSource

  constructor(private readonly config: IUndbSDKConfig) {}

  async subscribe(event: string, url: string, callback: ISubscribeCallback) {
    if (!this.isConnected) {
      await this.connect(url)
    }

    const eventSource = this.eventSource!

    eventSource.addEventListener('message', (event) => {
      const data = JSON.parse(event.data)
      callback(data)
    })
  }

  get isConnected() {
    return !!this.eventSource
  }

  connect(url: string) {
    const baseURL = getBaseUrl(this.config)
    this.eventSource = new EventSource(`${baseURL}/${url}`)
    return new Promise((resolve) => {
      this.eventSource?.addEventListener('open', resolve)
    })
  }
}
