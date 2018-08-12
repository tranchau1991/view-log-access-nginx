<?php
	include_once 'KnuckleLog.php';

// Initialize (parse nginx accesss log in default format with offset = 0 and limit 10 lines 
$data = new KnuckleLog('log_data.log', '%h %l %u %t "%r" %>s %O "%{Referer}i" \"%{User-Agent}i"', 0, 13);

// Get array of data & data count
$array = $data->worker();

// Total lines in log file
echo '<h1>'.$array['totalLines'].'</h1>';

// Dump data array
echo '<pre>';
print_r($array['data']);
echo '</pre>';