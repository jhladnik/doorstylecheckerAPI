const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const doors = {
    'avalon':{
        'competition': 'Avalon',
        'waypointStyle':'530',
        'speciesAvailable':'Cherry, Maple, Painted',
        'image':'https://www.waypointlivingspaces.com/content/dam/waypoint/products/Doors/series_530s_d12s_dt22s/stone/D_39MYS_CFO_21.jpeg'
    },
    'trystan':{
        'competition': 'Trystan',
        'waypointStyle':'530',
        'speciesAvailable':'Cherry, Maple, Painted',
        'image':'https://www.waypointlivingspaces.com/content/dam/waypoint/products/Doors/series_530s_d12s_dt22s/stone/D_39MYS_CFO_21.jpeg'
    },
    'fenwick':{
        'competition': 'Fenwick',
        'waypointStyle':'644',
        'speciesAvailable':'Maple, Painted',
        'image':'https://www.waypointlivingspaces.com/content/dam/waypoint/products/Doors/644s/stone/D_644S_48MYS_PntStone_16.jpeg'
    },
    'liberty':{
        'competition': 'Liberty',
        'waypointStyle':'644',
        'speciesAvailable':'Maple, Painted',
        'image':'https://www.waypointlivingspaces.com/content/dam/waypoint/products/Doors/644s/stone/D_644S_48MYS_PntStone_16.jpeg'
    },
    'door5':{
        'competition': '',
        'waypointStyle':'',
        'speciesAvailable':'',
        'image':''
    },
    'door6':{
        'competition': '',
        'waypointStyle':'',
        'speciesAvailable':'',
        'image':''
    },
    'door7':{
        'competition': '',
        'waypointStyle':'',
        'speciesAvailable':'',
        'image':''
    },
    'door8':{
        'competition': '',
        'waypointStyle':'',
        'speciesAvailable':'',
        'image':''
    },
    'door9':{
        'competition': '',
        'waypointStyle':'',
        'speciesAvailable':'',
        'image':''
    },
    'door10':{
        'competition': '',
        'waypointStyle':'',
        'speciesAvailable':'',
        'image':''
    },
    'door11':{
        'competition': '',
        'waypointStyle':'',
        'speciesAvailable':'',
        'image':''
    },
    'door12':{
        'competition': '',
        'waypointStyle':'',
        'speciesAvailable':'',
        'image':''
    },
    'door13':{
        'competition': '',
        'waypointStyle':'',
        'speciesAvailable':'',
        'image':''
    },
    'door not in database yet':{
        'competition':'Door not in database yet',
        'waypointStyle':'N/A',
        'speciesAvailable':'N/A',
        'image':'N/A'
    }
}

app.get('/',(request, response)=>{
    response.sendFile(__dirname+'/index.html')
})

app.get('/api/:doorName', (request, response)=>{
    const doorsName = request.params.doorName.toLowerCase()

    if(doors[doorsName]){
        response.json(doors[doorsName])
    }else{
        response.json(doors['door not in database yet'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log('Server is running.')
})