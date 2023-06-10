const categories = [
  {
    value: 'computers',
    name: 'Компьютеры',
    api: '/computers',
    key: 'computer_id',
    fields: [
      {keyIn: 'graphic_card', name: 'graphic_card', type: 'text', value: ''},
      {keyIn: 'processor', name: 'processor', type: 'text', value: ''},
      {keyIn: 'ram', name: 'ram', type: 'text', value: ''},
    ],
  },
  {
    value: 'games',
    name: 'Игры',
    api: '/games',
    key: 'game_id',
    fields: [
      {keyIn: 'game', name: 'game', type: 'text', value: ''},
      {keyIn: 'age_limit', name: 'age_limit', type: 'number', value: ''},
      {keyIn: 'duration', name: 'duration', type: 'number', value: ''},
      {keyIn: 'genre', name: 'genre', type: 'text', value: ''},
      {keyIn: 'price', name: 'price', type: 'number', value: ''},
    ],
  },
  {
    value: 'reservations',
    name: 'Бронь',
    api: '/reservations',
    key: 'reservation_id',
    fields: [
      {
        keyIn: 'reservation_time',
        name: 'reservation_time',
        type: 'datetime-local',
        value: '',
      },
      {
        keyIn: 'peoples',
        name: 'peoples',
        type: 'number',
        value: '',
      },
      {
        keyIn: 'all_price',

        name: 'all_price',
        type: 'number',
        value: '',
      },
    ],
    sideFieldsLocal: [
      {
        keyIn: 'login',
        api: '/users',
        name: 'login',
        subName: 'user',
        type: 'text',
        value: '',
      },
      {
        keyIn: 'room_id',
        api: '/rooms',
        name: 'type_room',
        subName: 'room',
        type: 'number',
        value: '',
      },
      {
        keyIn: 'game_id',
        api: '/games',
        name: 'game',
        subName: 'game',
        type: 'number',
        value: '',
      },
    ],
  },
  {
    value: 'rooms',
    name: 'Комноты',
    api: '/rooms',
    key: 'room_id',
    fields: [
      {keyIn: 'type_room', name: 'type_room', type: 'text', value: ''},
      {keyIn: 'employee_id', name: 'employee_id', type: 'number', value: ''},
      {keyIn: 'vr_device_id', name: 'vr_device_id', type: 'number', value: ''},
      {keyIn: 'price', name: 'price', type: 'number', value: ''},
    ],
  },
  {
    value: 'vrdevices',
    name: 'ВР-устройства',
    api: '/vrdevices',
    key: 'vr_device_id',
  },
  {
    value: 'employees',
    name: 'Сотрудники',
    api: '/employees',
    key: 'employee_id',
  },
  {
    value: 'statuses',
    name: 'Статусы',
    api: '/statuses',
    key: 'status_id',
  },
  {
    value: 'users',
    name: 'Пользователи',
    api: '/users',
    key: 'user_id',
  },
  {
    value: 'requests',
    name: 'Запросы на звонок',
    api: '/requests',
    key: 'request_id',
  },
]

export default categories
