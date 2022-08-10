import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,
  uri: '' as string,
  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
    this.uri = uri
  },
  async disconnect (): Promise<void> {
    this.client.close()
    this.client = null
  },
  async getCollection (name: string): Promise<Collection> {
    if (!this.client?.db()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  }
}
