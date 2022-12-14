const translation = {
  "zh-CN": "简体中文",
  "en-US": "English",
  // appbar
  home: "Home",
  config: "Config",
  preview: "Preview",
  calibration: "Calibration",
  configDev: "Config(Dev)",
  log: "Log",
  upgrade: "Upgrade",
  PowerOff: "PowerOff",
  Reboot: "Reboot",
  ConfirmPowerOff: "Confirm to power off",
  ConfirmReboot: "Confirm to reboot",
  // user
  currentDevice: "Current User",
  ClientIP: "Client",
  LastConnectTime: "Time",
  RequestCount: "Requests",
  Action: "Action",
  // config
  device: "Device",
  network: "Network",
  lidar: "Lidar",
  camera: "Camera",
  radar: "Radar",
  collection: "Acquisition",
  Mode: "Mode",
  detect: "Detect",
  slam: "SLAM",
  detect_slam: "Detect+SLAM",
  output: "Output",
  advance: "Advance",
  reset: "Reset",
  update: "Update",
  OpenTerminal: "Terminal",
  selectConfig: "Select Config",
  selectCalibration: "Select Calibration",
  BoardConfig: "Board Config",
  SelectFunctions: "Select Functions",
  // config network
  address: "Address",
  netmask: "Netmask",
  gateway: "Gateway",
  timesync: "Time Sync",
  master: "Master",
  slave: "Slave",
  eth0: "Eth0",
  eth1: "Eth1",
  eth2: "Eth2",
  eth3: "Eth3",
  server: "Server Address",
  inputDevice: "Input Device",
  workmode: "Mode",
  // config output
  objects: "Object Type",
  vehicle: "Vehicle",
  pedestrian: "Pedestrian",
  cyclist: "Cyclist",
  traffic_cone: "Traffic Cone",
  freespace: "Freespace",
  protocol: "Protocol",
  destination: "Destination",
  coordinate: "Coordinate",
  baud: "Baud",
  freespaceConfig: "Freespace Config",
  minHeight: "Min Height",
  maxHeight: "Max Height",
  resolution: "Resolution",
  // config slam
  slamMethod: "Slam Algorithm",
  method: "Algorithm",
  mapping: "Mapping",
  localization: "Localization",
  sensor: "Sensor Configuration",
  mapParam: "Map Configuration",
  locParam: "Localization Configuration",
  distance: "Distance",
  rotation: "Rotation",
  mapResolution: "Resolution",
  mapPath: "Map Path",
  // updateCount: "Update Step",
  // searchRange: "Search Range",
  otherParam: "Other Parameters",
  groundConstraint: "Ground Constraint",
  // config advance
  pointcloudForward: "Point Cloud Forward",
  system: "System",
  resetSetting: "Restore Setting",
  needRestore: "User settings will be cleanup, make sure to restore?",
  // config lidar
  name: "Name",
  port: "Port",
  roi: "Max Range",
  // config camera
  intrinsics: "Intrinsics",
  extrinsics: "Extrinsics",
  imageWidth: "Width",
  imageHeight: "Height",
  undistortion: "Undistortion",
  stream: "Streaming",
  streamProtocol: "Protocol",
  // config radar
  radarDevice: "Input Device",
  // conofig ins
  ins: "INS",
  insExtrinsic: "INS Extrinsics",
  imuExtrinsic: "IMU Extrinsics",
  // config popover
  invalidConfig: "Invalid Config",
  configReset: "Config is reset",
  configUpdated: "Config is updated",
  needReboot: "System need reboot to perform this operation, are you sure?",
  yes: "Confirm",
  no: "Cancel",
  abortReboot: "Reboot aborted!",
  doReboot: "Rebooting, please wait for page reloading.",
  // home
  hostTime: "Host Time",
  deviceTime: "Device Time",
  status: "Status",
  disk: "Disk",
  diskVolume: "Volume ",
  diskLeft: "Free ",
  viewFile: "View",
  mode: "Mode",
  online: "Online",
  offline: "Offline",
  // home status
  // preview
  roiAdd: "Add ROI",
  roiDel: "Delete  ROI",
  roiSegIn: "Segment In",
  roiSegOut: "Segment Out",
  roiCancel: "Cancel",
  selectFile: "Select Directory",
  playbackRate: "X",
  restart: "Restart Mapping",
  saveMap: "Save Mapping",
  radarDisplay: "Radar Display",
  // error
  invalidName: "Invalid Name",
  invalidAddress: "Invalid Address",
  invalidPort: "Invalid Port",
  duplicatedPorts: "Duplicated Ports",
  duplicatedName: "Duplicated Names",
  invalidNumber: "Invalid Number",
  invalidBaud: "Invalid Baud",
  invalidFreespaceResolution: "Invalid Resolution",
  invalidMapResolution: "Invalid Resolution",
  invalidInterval: "Invalid Number",
  // invalidUpdate: "Invalid Number",
  // invalidRange: "Invalid Number",
  emptySensorInput: "Invalid Input",
  // calibration
  // calibration nav
  calibrate_lidar: "Lidar Calibration",
  calibrate_lidar_camera: "Lidar & Camera Calibration",
  calibrate_camera: "Camera Calibration",
  calibrate_lidar_radar: "Lidar & Radar Calibration ",
  calibrate_lidar_ins: "Lidar & INS Calibration",
  calibrate_lidar_imu: "Lidar & IMU Calibration",
  calibrate_panorama_camera: "Panorama Camera Calibration",
  // calibration camera
  stepNameCalibCamera: "Calibrate",
  helpMsgCalibCamera:
    "Put the chessboard on the different position. Press space to select photo and detect the corners（more than 10 frames）",
  helpMsgCalibCameraCheck: "Press Ctrl to switch the image, check the distortion result",
  boardCol: "Col: ",
  boardRow: "Chessboard Row: ",
  boardSize: "Size: ",
  calibPreview: "Preview",
  calibStatus: "Status",
  // calibration lidar camera
  stepNameSelectCamera: "Select Camera",
  stepNameCalibLidarAndCamera: "Calibrate",
  stepNameCheck: "Check",
  helpMsgSelectCamera: "Camera",
  helpMsgCalibLidarAndCamera: "Select points and click next",
  helpMsgCheck: "",
  clearPoints: "Clear",
  previousFrame: "Previous",
  nextFrame: "Next",
  // calibration lidar
  stepNameSelectLidar: "LiDAR selection",
  stepNameCalibGroud: "Ground calibration",
  stepNameCalibFront: "Orientation calibration",
  stepNameFinetune: "Finetune",
  helpMsgSelectLidar: "Please select the LiDAR for calibration",
  helpMsgCalibGroud:
    "Please press Ctrl, use left click to pick the ground area, use right click to close the area, click NEXT and wait for ground calibration ",
  helpMsgCalibFront:
    "Please press Ctrl, use left click to pick the reference points(more than 1), fill the table in the right side with the coordinates of the points in the target reference coordinate system",
  helpMsgFinetune: "",
  next: "Next",
  previous: "Previous",
  skip: "Skip",
  resetCalibration: "Reset",
  calibFinish: "Finish",
  redraw: "Redraw",
  setPoints: "Please set target points value here:",
  local: "Local",
  global: "Global",
  useCoordinate: "Calibration Use ",
  Coordinate: "Coordinate",
  // calibration lidar ins
  stepNameLidarInsBegin: "Begin",
  stepNameLidarInsCalib: "Calibrate",
  stepNameLidarInsCheck: "Finetune",
  helpMsgLidarInsBegin: "Please ensure the Lidar and INS sensors are well connected",
  helpMsgLidarInsCalib: "Please drive the vehicle and make the route like 8",
  helpMsgLidarInsCheck: "Finetune the calibration result",
  notConnected: "Status: device not connected",
  LidarInsConnect: "Status: Lidar(Connected) INS(Connected)",
  InsDisconnect: "Status: Lidar(Connected) INS(Disconnected)",
  LidarDisconnect: "Status: Lidar(Disconnected) INS(Connected)",
  LidarInsDisconnect: "Status: Lidar(Disconnected) INS(Disconnected)",
  calibProgress: "Calibration progress ",
  optProgress: "Optimization progress ",
  // calibration lidar imu
  stepNameLidarImuBegin: "Begin",
  stepNameLidarImuCalib: "Calibrate",
  stepNameLidarImuCheck: "Check",
  helpMsgLidarImuBegin: "Please ensure the Lidar and INS sensors are well connected",
  helpMsgLidarImuCalib: "Please drive the vehicle and make the route like 8",
  helpMsgLidarImuCheck: "Please check the green line(lidar trajectory) and red line(IMU trajectory) match well",
  // calibration panel for points
  index: "Index",
  xCar: "x",
  yCar: "y",
  LatCar: "lat",
  LonCar: "lng",
  xLidar: "",
  yLidar: "",
  action: "Action",
  target: "Target",
  reference: "Reference",
  // calibration Radar
  stepNameSelectRadar: "Radar selection",
  helpMsgSelectRadar: "Please select the Radar for calibration",
  // calibration panorama camera
  Camera: "Camera",
  helpMsgSelectPanoramaCamera: "Select cameras for stitching (from left to right)",
  helpMsgCalibPanoramaCamera: 'Adjust the camera position and ensure the overlaps of views. Press "Space" to calibrate',
  helpMsgCalibPanoramaCameraCheck: "Check the panorama camera stitching result",
  CurrentStitchCamera: "Current cameras for calibration",
  // preview panel
  rgb: "RGB",
  axis: "Axis",
  size: "Size",
  visible: "Display",
  objectVisible: "3D Display",
  map: "Map",
  step: "Step",
  showOnImage: "2D Display",
  objectType: "Object Type",
  sensorType: "Sensor Type",
  objObject: "Model",
  polarGrid: "Polar Grid",
  radius: "Radius",
  radials: "Radials",
  circles: "Circles",
  gray: "Gray",
  depth: "Depth",
  height: "Height",
  intensity: "Intensity",
  maxIntensity: "Max Intensity",
  sampleStep: "Downsample Size",
  // color: 'color',
  // camera: 'Camera',
  type: "Type",
  NORMAL: "Normal",
  UP: "Up",
  DRIVER: "Driver",
  FOLLOW: "Follow",
  SELF: "First Person",
  pointcloud: "Pointcloud",
  color: "Color",
  object: "Object",
  direction: "Direction",
  details: "Details",
  labelScale: "Label Scale",
  trajectory: "Trajectory",
  freespaceSub: "Freespace",
  // upgrade
  currentVersion: "Version",
  InvalidFirmware: "Invalid File",
  Choose: "Choose",
  Upgrade: "Upgrade",
  FirmwareInfo: "Firmware Detail",
  uploadFirmware: "Upload",
  idle: "Idle",
  uploading: "Uploading",
  preparing: "Preparing",
  upgrading: "Upgrading",
  verifying: "Verifying",
  postprocessing: "Postprocessing",
  restarting: "Restarting",
  failed: "Fail",
  success: "Success",
  UpgradeDone: "Finish",
  UnKnown: "UnKnown",
};

export default translation;
