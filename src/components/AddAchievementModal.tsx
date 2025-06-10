import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface AddAchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddAchievementModal = ({ isOpen, onClose }: AddAchievementModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    rarity: "",
    xp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Новое достижение:", formData);
    alert(`🏆 Достижение "${formData.name}" успешно добавлено!`);
    setFormData({ name: "", description: "", type: "", rarity: "", xp: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            Добавить новое достижение
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Название достижения</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Например: Первая победа"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Подробное описание достижения"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Тип</Label>
              <Select
                value={formData.type}
                onValueChange={(value) =>
                  setFormData({ ...formData, type: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital">Цифровое</SelectItem>
                  <SelectItem value="physical">Физическое</SelectItem>
                  <SelectItem value="hybrid">Гибридное</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Редкость</Label>
              <Select
                value={formData.rarity}
                onValueChange={(value) =>
                  setFormData({ ...formData, rarity: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Редкость" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="common">Обычное</SelectItem>
                  <SelectItem value="rare">Редкое</SelectItem>
                  <SelectItem value="epic">Эпическое</SelectItem>
                  <SelectItem value="legendary">Легендарное</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="xp">Опыт (XP)</Label>
            <Input
              id="xp"
              type="number"
              value={formData.xp}
              onChange={(e) => setFormData({ ...formData, xp: e.target.value })}
              placeholder="100"
              required
            />
          </div>

          <div className="flex space-x-4">
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-secondary"
            >
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAchievementModal;
