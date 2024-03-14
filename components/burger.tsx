import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';

export function Burger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={32} />
      </SheetTrigger>
      <SheetContent side={'top'}>
        <Command className="rounded-lg border shadow-md">
          <CommandList>
            <CommandGroup heading="Páginas">
              <CommandItem>
                <Calendar className="mr-2 w-4 h-4" />
                <span>Home</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 w-4 h-4" />
                <span>Blog</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 w-4 h-4" />
                <span>Contato</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 w-4 h-4" />
                <span>Serviços</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Programas">
              <CommandItem>
                <User className="mr-2 w-4 h-4" />
                <span>Programa para OSCs e projetos Open Source</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </SheetContent>
    </Sheet>
  );
}

export default Burger;
