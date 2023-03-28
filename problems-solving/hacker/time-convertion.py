def convert_time_to_military(time_str):
    hour, rest = time_str.split(":")
    indicator = rest[-2:]
    rest = rest[:-2]
    
    if hour == "12" and indicator == "AM":
        hour = "00"
    elif indicator == "PM":
        hour = str(int(hour) + 12)
    
    return f"{hour}:{rest}"