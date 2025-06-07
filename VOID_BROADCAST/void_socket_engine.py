import asyncio
import websockets

async def diablo_listener():
    uri = "ws://localhost:11451"
    async with websockets.connect(uri) as websocket:
        await websocket.send("summon")
        response = await websocket.recv()
        print("[VOID SOCKET] DIABLO:", response)

asyncio.run(diablo_listener())
