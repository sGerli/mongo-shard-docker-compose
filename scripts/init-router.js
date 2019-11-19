sh.addShard("shard01/shard01a:27018")
sh.addShard("shard01/shard01b:27018")
sh.addShard("shard01/shard01c:27018")

sh.addShard("shard02/shard02a:27019")
sh.addShard("shard02/shard02b:27019")
sh.addShard("shard02/shard02c:27019")

sh.addShard("shard03/shard03a:27020")
sh.addShard("shard03/shard03b:27020")
sh.addShard("shard03/shard03c:27020")

db = db.getSiblingDB('config')
db.settings.save( { _id:"chunksize", value: 1 } )

db = db.getSiblingDB('master')
db.ventas.createIndex({_id: 'hashed'})

sh.enableSharding("master")
sh.shardCollection("master.ventas", { _id : 1 } )