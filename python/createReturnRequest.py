

import asyncio
import dazl
from dazl.ledgerutil import ACS

from dazl.model.reading import ReadyEvent
# network = dazl.Network()
# network.set_config(url='http://localhost:6865')

# client = network.aio_party('client1')



# async def main():
#     async with dazl.connect(url='http://localhost:6865', read_as='alice') as conn:
#         async with ACS(conn, {"*": {}}) as acs:
#             snapshot = await acs.read()

#     print(snapshot)

# # Python 3.7+
# asyncio.run(main())


# async def main():
#     async with dazl.connect(url='localhost:6865', read_as='warehouse1') as conn:
#         print("connected")
#         async with conn.stream() as stream:
#             object_methods = [method_name for method_name in dir(stream)
#                   if callable(getattr(stream, method_name))]
#             print("stream", object_methods)
#             async for event in stream.items():
#                 print(event.contract_id, event.payload)
    
#         return "ok"

# Python 3.7+ or later

# foo = asyncio.run(main())
# print(foo)


def main():
    with dazl.simple_client('http://localhost:6865', 'warehouse1') as client:
        # wait for the ACS to be fully read
        client.ready()
        contract = { 'issuer' : 'Alice', 'owner' : 'Alice', 'name' : 'hello world!' }
        # client.ready()
        client.submit_create('User:User', contract)
    # print(contract_dict)
    print("HELLO???")
    

main()