#include <stdio.h>
#include <stdlib.h>

// represents a node
typedef struct node
{
    int number;
    struct node *next;
} node;

int main(int argc, char *argv[])
{
    // list of size 0
    node *list = NULL;

    for (int i = 1; i < argc; i++)
    {
        int number = atoi(argv[i]);

        // add number to list
        node *n = malloc(sizeof(node));
        if (n == NULL)
        {
            return 1;
        }
        // derefrencies and accessing to number
        // (*n).number = number
        n->number = number;
        n->next = NULL;

        n->next = list;
        // update list to point to new node
        list = n;
    }

    node *ptr = list;
    while (ptr != NULL)
    {
        printf("%i\n", ptr->number);
        ptr = ptr->next;
    }
    ptr = list;
    // free memory
    while (ptr != NULL)
    {
        // we need to create a temporari node in order to free ptr, cuz we could loose the value of  ptr if we do directly
        node *next = ptr->next;
        free(ptr);
        ptr = next;
    }
}