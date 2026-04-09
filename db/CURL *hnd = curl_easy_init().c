

CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "POST");
curl_easy_setopt(hnd, CURLOPT_URL, "localhost:8080/tech/user/signup");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "Accept: */*");
headers = curl_slist_append(headers, "User-Agent: Thunder Client (https://www.thunderclient.com)");
headers = curl_slist_append(headers, "Content-Type: application/json");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, "           { \"fullname\": \"Favour\",\n            \"phonenumber\": \"08035923401\",\n            \"stack\": \"backend\"}");

CURLcode ret = curl_easy_perform(hnd);
