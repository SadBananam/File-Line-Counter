package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    fmt.Print("Enter the file path: ")
    var filePath string
    fmt.Scanln(&filePath)

    file, err := os.Open(filePath)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    lineCount := 0

    for scanner.Scan() {
        lineCount++
    }

    fmt.Printf("The file has %d lines.\n", lineCount)
}
