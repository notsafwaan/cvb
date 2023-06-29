from pymongo import MongoClient
cluster = "mongodb+srv://hellosafwaan:gaMcGP1JiaCzyPBa@cluster0.6e6aewe.mongodb.net/cvb?retryWrites=true&w=majority"
client = MongoClient(cluster)
db = client.cvb
print(client.list_database_names())
print(db.list_collection_names())

