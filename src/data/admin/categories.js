const categories = [
  {
    value: 'computers',
    name: 'Компьютеры',
    api: '/computers',
    key: 'computer_id',
    fields: [
      {name: 'graphic_card', type: 'text', value: ''},
      {name: 'processor', type: 'text', value: ''},
      {name: 'ram', type: 'text', value: ''},
    ],
  },
  {
    value: 'games',
    name: 'Игры',
    api: '/games',
    key: 'game_id',
    fields: [
      {name: 'game', type: 'text', value: ''},
      {name: 'age_limit', type: 'number', value: ''},
      {name: 'duration', type: 'number', value: ''},
      {name: 'genre', type: 'text', value: ''},
      {name: 'price', type: 'number', value: ''},
    ],
  },
  {
    value: 'reservations',
    name: 'Бронь',
    api: '/reservations',
    key: 'reservation_id',
  },
  {
    value: 'rooms',
    name: 'Комноты',
    api: '/rooms',
    key: 'room_id',
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
    value: 'requests',
    name: 'Запросы на звонок',
    api: '/requests',
    key: 'request_id',
  },
]

export default categories
